import { useEffect, useState } from 'react';

export default function useTimer() {
    const [timer, setTimer] = useState<number>(15);
    const [timerIsRunning, setTimerIsRunning] = useState<boolean>(false);

    useEffect(() => {
        if (timerIsRunning && timer > 0) {
            const intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [timer, timerIsRunning]);

    const startTimer = () => {
        setTimerIsRunning(true);
    };

    const stopTimer = () => {
        setTimerIsRunning(false);
    };

    const resetTimer = () => {
        setTimer(15);
        setTimerIsRunning(false);
    };

    return {
        timer,
        timerIsRunning,
        setTimer,
        setTimerIsRunning,
        startTimer,
        resetTimer,
        stopTimer,
    };
}
