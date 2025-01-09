import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type QuizData = {
    id: string;
    timestamp: number;
};

export type QuizLimitState = {
    quizzes: QuizData[];
    maxQuizzes: number;
    timeLimit: number;
};

type QuizLimitAction = {
    canTakeQuiz: () => boolean;
    addQuiz: (id: string) => void;
    startLimitTimer: () => void;
    resetLimitTimer: () => void;
    resetQuizzes: () => void;
};

export const useQuizLimitStore = create<QuizLimitState & QuizLimitAction>()(
    persist(
        (set, get) => ({
            quizzes: [],
            maxQuizzes: 5,
            timeLimit: 30 * 60 * 1000, // 30 minutes in milliseconds
            canTakeQuiz: () => {
                const { quizzes, maxQuizzes, timeLimit } = get();
                const now = Date.now();
                const filteredQuizzes = quizzes.filter(
                    (quiz) => now - quiz.timestamp <= timeLimit
                );
                return filteredQuizzes.length < maxQuizzes;
            },
            addQuiz: (id: string) => {
                const { quizzes, timeLimit } = get();
                const now = Date.now();
                const filteredQuizzes = quizzes.filter(
                    (quiz) => now - quiz.timestamp <= timeLimit
                );
                set({
                    quizzes: [...filteredQuizzes, { id, timestamp: now }],
                });

            },
            startLimitTimer: () => {
                const { timeLimit } = get();
                setInterval(() => {
                    set({ timeLimit: timeLimit - 1000 });
                }, 1000);
            },
            resetLimitTimer: () => {
                const { timeLimit, resetQuizzes } = get();
                set({ timeLimit });
                resetQuizzes();
            },
            resetQuizzes: () => {
                set({ quizzes: [] });
            },
        }),
        {
            name: 'quiz-limit',
        }
    )
);
