import { useEffect, useState } from 'react';
import { Question, QCMQuestion } from '@/lib/types';

export function useGetQuestions(url: string) {
    const [questions, setQuestions] = useState<QCMQuestion[] | Question[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data);
            })
            .catch((error) => {
                setError(error);
            });
    }, [url]);

    return {
        questions,
        error,
    };
}
