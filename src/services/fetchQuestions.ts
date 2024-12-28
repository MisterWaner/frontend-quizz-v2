const BASE_URL = 'http://localhost:3001';

import { Question } from '@/lib/types';

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
