import { create } from 'zustand';
import { getMathQuestions } from '@/services/fetchQuestions';

export type QuizState = {
    label: string;
    isSelected: boolean;
    type: string;
    questions:
        | {
              id: number;
              label: string | null;
              correctAnswer: number | string | null;
          }[]
        | null;
    userAnswer: number | string;
    currentQuestionIndex: number;
    totalQuestions: number;
    dialogTitle: string;
    dialogTitleStyle: string;
    dialogActionStyle: string;
    progress: number;
    totalProgress: number;
    score: number;
    timer: number;
    timerIsRunning: boolean;
};

type QuizAction = {
    selectSubject: (
        label: QuizState['label'],
        isSelected: QuizState['isSelected'],
        type: QuizState['type']
    ) => void;
    generateQuestion: (type: string) => Promise<void>;
    handleNextQuestion: () => void;
    checkUserAnswer: (userAnswer: QuizState['userAnswer']) => void;
    incrementProgress: () => void;
    resetProgress: () => void;
    incrementScore: () => void;
    resetScore: () => void;
    startTimer: () => void;
    stopTimer: () => void;
    resetTimer: () => void;
};

export const useQuizStore = create<QuizState & QuizAction>((set, get) => ({
    label: '',
    isSelected: false,
    type: '',
    questions: null,
    currentQuestionIndex: 0,
    totalQuestions: 10,
    selectSubject(label, isSelected, type) {
        set({ label, isSelected, type });
        console.log(label, isSelected, type);
    },
    userAnswer: '',
    dialogTitle: '',
    dialogTitleStyle: 'text-neutral-950',
    dialogActionStyle: '',
    progress: 0,
    totalProgress: 100,
    score: 0,
    timer: 15,
    timerIsRunning: false,

    // Questions
    async generateQuestion(type) {
        try {
            const questions = (await getMathQuestions(type)).map(
                (question) => ({
                    id: question.id,
                    label: question.label,
                    correctAnswer: question.correctAnswer,
                })
            );
            set({ questions, currentQuestionIndex: 0 });
        } catch (error) {
            console.error(
                'Erreur lors de la récupération des questions',
                error
            );
        }
    },
    handleNextQuestion() {
        const { currentQuestionIndex, questions } = get();
        if (questions && currentQuestionIndex < questions.length - 1) {
            set({ currentQuestionIndex: currentQuestionIndex + 1 });
        }
    },
    checkUserAnswer(userAnswer) {
        const { currentQuestionIndex, questions } = get();
        if (questions && currentQuestionIndex < questions.length - 1) {
            const currentQuestion = questions[currentQuestionIndex];
            if (currentQuestion.correctAnswer === userAnswer) {
                set({
                    dialogTitle: 'Bravo ! Bonne réponse !',
                    dialogTitleStyle: 'text-green-500',
                    dialogActionStyle:
                        'bg-green-500 text-slate-50 hover:bg-green-500/90',
                });
            } else if (currentQuestion.correctAnswer !== userAnswer) {
                set({
                    dialogTitle: `Dommage, mauvaise réponse... La bonne réponse est ${currentQuestion.correctAnswer}`,
                    dialogTitleStyle: 'text-red-500',
                    dialogActionStyle:
                        'bg-red-500 text-slate-50 hover:bg-red-500/90',
                });
            }
        }
        return false;
    },

    // Timer
    startTimer: () => {
        const {timer, timerIsRunning} = get();
        if (timerIsRunning && timer > 0) {
            const intervalId = setInterval(() => {
                set({ timer: timer - 1 });
            }, 1000);

            return () => clearInterval(intervalId);
        }
        set({ timerIsRunning: true, timer: 15 });
    },
    stopTimer: () => {
        set({ timerIsRunning: false });
    },
    resetTimer: () => {
        set({ timer: 15 });
    },

    // Progress and Score
    incrementProgress: () => {
        const { progress, totalProgress } = get();
        for (let i = 0; i < totalProgress; i++) {
            set({ progress: progress + 10 });
        }
    },
    resetProgress: () => {
        set({ progress: 0 });
    },
    incrementScore: () => {
        set((state) => ({ score: state.score + 1 }));
    },
    resetScore: () => {
        set((state) => ({ score: (state.score = 0) }));
    },
}));
