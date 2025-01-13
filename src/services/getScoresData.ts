import { User } from '@/lib/types';

const BASE_URL = 'http://localhost:3001/scores';

export async function getDailyScores(): Promise<User[]> {
    try {
        const response = await fetch(`${BASE_URL}/daily`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const { users } = await response.json();
            return users;
        } else {
            throw new Error(
                'Une erreur est survenue lors de la récupération des scores'
            );
        }
    } catch (error) {
        console.error('Une erreur est survenue', error);
        throw error;
    }
}

export async function getMonthlyScores(): Promise<User[]> {
    try {
        const response = await fetch(`${BASE_URL}/monthly`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const { users } = await response.json();
            return users;
        } else {
            throw new Error(
                'Une erreur est survenue lors de la récupération des scores'
            );
        }
    } catch (error) {
        console.error('Une erreur est survenue', error);
        throw error;
    }
}

export async function getDailyTop5Scores(): Promise<User[]> {
    try {
        const response = await fetch(`${BASE_URL}/daily-five`, {
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
                'Une erreur est survenue lors de la récupération des scores'
            );
        }
    } catch (error) {
        console.error('Une erreur est survenue', error);
        throw error;
    }
}

export async function getMonthlyTop5Scores(): Promise<User[]> {
    try {
        const response = await fetch(`${BASE_URL}/monthly-five`, {
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
                'Une erreur est survenue lors de la récupération des scores'
            );
        }
    } catch (error) {
        console.error('Une erreur est survenue', error);
        throw error;
    }
}
