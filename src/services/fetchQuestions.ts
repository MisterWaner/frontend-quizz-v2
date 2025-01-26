const BASE_URL = 'http://localhost:3001';

import { Question, QCMQuestion } from '@/lib/types';

export async function getMathQuestions(type: string): Promise<Question[]> {
    try {
        const response = await fetch(`${BASE_URL}/math/${type}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Une erreur est survenue lors de la creation');
        }
    } catch (error) {
        console.error('Une erreur est survenue', error);
        throw error;
    }
}

export async function getCapitalsQuestions(
    type: string
): Promise<QCMQuestion[]> {
    try {
        const response = await fetch(`${BASE_URL}/geography/${type}-capitals`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(
                'Une erreur est survenue lors de la récupération des questions'
            );
        }
    } catch (error) {
        console.error('Une erreur est survenue', error);
        throw error;
    }
}
