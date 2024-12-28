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
}));
