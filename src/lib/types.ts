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

export type QCMQuestion = {
    id: number;
    label: string;
    options: string[];
    correctAnswer: number;
}

export type User = {
    id?: string;
    username?: string;
    password?: string;
    score?: number;
    currentMonthScore?: number;
    lastMonthScore?: number;
    isRegistered?: boolean;
};
