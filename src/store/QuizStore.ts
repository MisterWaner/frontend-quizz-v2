import { create } from 'zustand';
import {
    getMathQuestions,
    getCapitalsQuestions,
} from '@/services/fetchQuestions';
import { Question, QCMQuestion } from '@/lib/types';

export type QuizState = {
    name: string;
    isSelected: boolean;
    type: string;
    questions: Question[] | QCMQuestion[] | null;
    userAnswer: number | string;
    currentQuestionIndex: number;
    totalQuestions: number;
    dialogTitle: string;
    dialogTitleStyle: string;
    dialogActionStyle: string;
    progress: number;
    totalProgress: number;
    score: number;
    sessionScore: number;
    timer: number;
    timerIsRunning: boolean;
};

type QuizAction = {
    selectSubject: (
        name: QuizState['name'],
        isSelected: QuizState['isSelected'],
        type: QuizState['type']
    ) => void;
    generateQuestion: (type: QuizState['type'], name: QuizState['name']) => Promise<void>;
    handleNextQuestion: () => void;
    checkUserAnswer: (userAnswer: QuizState['userAnswer']) => void;
    incrementProgress: () => void;
    resetProgress: () => void;
    incrementScore: () => void;
    incrementSessionScore: () => void;
    resetScore: () => void;
    setTimer: (timer: number) => void;
    startTimer: (timer: number) => void;
    stopTimer: () => void;
    resetTimer: () => void;
    decrementTimer: () => void;
};

export const useQuizStore = create<QuizState & QuizAction>((set, get) => ({
    name: '',
    isSelected: false,
    type: '',
    questions: null,
    currentQuestionIndex: 0,
    totalQuestions: 10,
    selectSubject(name, isSelected, type) {
        set({ name, isSelected, type });
        console.log(name, isSelected, type);
    },
    userAnswer: '',
    dialogTitle: '',
    dialogTitleStyle: 'text-neutral-950',
    dialogActionStyle: '',
    progress: 0,
    totalProgress: 100,
    score: 0,
    sessionScore: 0,
    timer: 15,
    timerIsRunning: false,
    setTimer(timer: number) {
        set({ timer });
    },
    startTimer(timer: number) {
        set({ timerIsRunning: true, timer: timer });
    },
    stopTimer() {
        set({ timerIsRunning: false });
    },
    resetTimer() {
        set({ timer: 15, timerIsRunning: false });
    },
    decrementTimer() {
        const { timer, timerIsRunning } = get();
        if (timerIsRunning && timer > 0) {
            set({ timer: timer - 1 });
        }
    },
    // Questions
    async generateQuestion(type: string, name: string) {
        try {
            // const { label } = get();
            let questions: QCMQuestion[] | Question[] | null;
            switch (name) {
                case 'Mathématiques':
                    questions = (await getMathQuestions(type)).map(
                        (question) => ({
                            id: question.id,
                            label: question.label,
                            correctAnswer: question.correctAnswer,
                        })
                    );
                    set({ questions, currentQuestionIndex: 0 });
                    break;
                case 'Géographie':
                    questions = (await getCapitalsQuestions(type)).map(
                        (question) => ({
                            id: question.id,
                            label: question.label,
                            options: question.options,
                            correctAnswer: question.correctAnswer,
                        })
                    );
                    set({ questions, currentQuestionIndex: 0 });
                    break;
                default:
                    break;
            }
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
        const {
            currentQuestionIndex,
            questions,
            timer,
            stopTimer,
            incrementScore,
        } = get();
        if (questions && currentQuestionIndex < questions.length - 1) {
            const currentQuestion = questions[currentQuestionIndex];
            if (currentQuestion.correctAnswer === userAnswer) {
                set({
                    dialogTitle: 'Bravo ! Bonne réponse !',
                    dialogTitleStyle: 'text-green-500',
                    dialogActionStyle:
                        'bg-green-500 text-slate-50 hover:bg-green-500/90',
                });
                incrementScore();
            } else if (currentQuestion.correctAnswer !== userAnswer) {
                set({
                    dialogTitle: `Dommage, mauvaise réponse... La bonne réponse est ${currentQuestion.correctAnswer}`,
                    dialogTitleStyle: 'text-red-500',
                    dialogActionStyle:
                        'bg-red-500 text-slate-50 hover:bg-red-500/90',
                });
            } else {
                set({
                    dialogTitle: '',
                    dialogTitleStyle: '',
                    dialogActionStyle: '',
                });
            }

            if (!userAnswer && timer === 0) {
                set({
                    dialogTitle: `Dommage, le temps est écoulé. La bonne réponse est ${currentQuestion.correctAnswer}`,
                    dialogTitleStyle: 'text-red-500',
                    dialogActionStyle:
                        'bg-red-500 text-slate-50 hover:bg-red-500/90',
                });
            }
            stopTimer();
        } else if (
            questions &&
            currentQuestionIndex === questions?.length - 1
        ) {
            const currentQuestion = questions[currentQuestionIndex];
            if (currentQuestion.correctAnswer === userAnswer) {
                set({
                    dialogTitle: 'Bravo ! Bonne réponse !',
                    dialogTitleStyle: 'text-green-500',
                    dialogActionStyle:
                        'bg-green-500 text-slate-50 hover:bg-green-500/90',
                });
                incrementScore();
            } else if (currentQuestion.correctAnswer !== userAnswer) {
                set({
                    dialogTitle: `Dommage, mauvaise réponse... La bonne réponse est ${currentQuestion.correctAnswer}`,
                    dialogTitleStyle: 'text-red-500',
                    dialogActionStyle:
                        'bg-red-500 text-slate-50 hover:bg-red-500/90',
                });
            } else {
                set({
                    dialogTitle: '',
                    dialogTitleStyle: '',
                    dialogActionStyle: '',
                });
            }
            stopTimer();
        }
    },

    // Progress
    incrementProgress: () => {
        const { progress, totalProgress } = get();
        for (let i = 0; i < totalProgress; i++) {
            set({ progress: progress + 10 });
        }
    },
    resetProgress: () => {
        set({ progress: 0 });
    },

    // Score
    incrementScore: () => {
        set((state) => ({ score: state.score + 1 }));
    },
    incrementSessionScore: () => {
        const { score } = get();
        set((state) => ({ sessionScore: state.sessionScore + score }));
    },
    resetScore: () => {
        set((state) => ({ score: (state.score = 0) }));
    },
}));
