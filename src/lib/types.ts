export type Subject = {
    id: number;
    label: string;
    path: string;
    type: string;
};

export type Question = {
    id: number;
    label: string;
    correctAnswer: number | string;
};

export type User = {
    id?: number;
    username?: string;
    password?: string;
    score?: number;
    currentMonthScore?: number;
    lastMonthScore?: number;
    isRegistered?: boolean;
};
