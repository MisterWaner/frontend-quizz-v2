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