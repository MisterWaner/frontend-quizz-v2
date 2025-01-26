import { useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useQuizStore } from '@/store/QuizStore';

import NextQuestionModal from '@/components/Game/Modals/NextQuestionModal';

export default function QCMQuestionCard() {
    const {
        questions,
        currentQuestionIndex,
        timer,
        timerIsRunning,
        startTimer,
        resetTimer,
        decrementTimer,
    } = useQuizStore();
    useQuizStore();

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (timerIsRunning) {
            intervalId = setInterval(() => {
                decrementTimer();
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [timerIsRunning, decrementTimer]);

    if (!questions || questions.length === 0) {
        return null;
    }

    const currentQuestion = questions[currentQuestionIndex];
    function handleSetResetTimer() {
        resetTimer();
    }

    function handleSelectOption(option: string) { 
        console.log(option);
        useQuizStore.setState({
            userAnswer: option,
        });
    }

    return (
        <Card
            className='md:w-1/2 mx-auto mt-24'
            onMouseEnter={() => {
                if (!timerIsRunning && timer > 0) {
                    startTimer(timer);
                }
            }}
        >
            <CardHeader>
                <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-sm italic'>{currentQuestion?.label}</p>
                <Label>Ta réponse :</Label>
                <RadioGroup className='grid grid-cols-2 items-center gap-4 mt-4'>
                    {'options' in currentQuestion &&
                        currentQuestion.options.map((option, index) => (
                            <div className='flex gap-4 items-center'>
                                <RadioGroupItem
                                    id={option}
                                    onClick={() =>
                                        handleSelectOption(option)
                                    }
                                    className='cursor-pointer w-4  text-neutral-950 border-none'
                                    key={index}
                                    value={option}
                                    disabled={timer === 0}
                                    tabIndex={0}
                                />
                                <Label htmlFor={option}>{option}</Label>
                            </div>
                        ))}
                </RadioGroup>
                {timerIsRunning && timer > 10 ? (
                    <div className='font-bold text-3xl flex w-full justify-center mt-4 text-green-500'>
                        {timer}
                    </div>
                ) : timerIsRunning && timer > 5 && timer <= 10 ? (
                    <div className='font-bold text-3xl flex w-full justify-center mt-4 text-orange-500'>
                        {timer}
                    </div>
                ) : timerIsRunning && timer > 0 && timer <= 5 ? (
                    <div className='font-bold text-3xl flex w-full justify-center mt-4 text-red-500  animate-ping'>
                        {timer}
                    </div>
                ) : (
                    <div className='font-bold text-3xl flex w-full justify-center mt-4 text-slate-500'>
                        {timer}
                    </div>
                )}
            </CardContent>
            <CardFooter className='justify-end'>
                <NextQuestionModal handleSetResetTimer={handleSetResetTimer} />
            </CardFooter>
        </Card>
    );
}
