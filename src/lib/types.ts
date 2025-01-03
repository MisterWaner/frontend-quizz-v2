export type Subject = {
    id: number;
    label: string;
    path: string;
    type: string;
}

export type Question = {
    id: number;
    label: string;
    correctAnswer: number | string;
};

export type User = {
    id: number;
    username: string;
    score: number;
    isRegistered: 0 | 1;
}