import { Link, useNavigate } from 'react-router';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from './ui/dropdown-menu';

import { useQuizStore } from '@/store/QuizStore';
import { useQuizLimitStore } from '@/store/QuitLimitStore';
import { useAuthStore } from '@/store/AuthStore';
import { subjectSelectorData } from '@/lib/subject-selector-data';
import { Subject } from '@/lib/types';

export default function SubjectSelector() {
    const subjectSelector = subjectSelectorData;
    const navigate = useNavigate();

    const generateQuestion = useQuizStore((state) => state.generateQuestion);
    const setTimer = useQuizStore((state) => state.setTimer);
    const { canTakeQuiz, addQuiz, startLimitTimer } = useQuizLimitStore();
    const timeLimit = useQuizLimitStore((state) => state.timeLimit);
    const { userInfo } = useAuthStore();

    const handleStartQuiz = () => {
        if (!userInfo) {
            if (canTakeQuiz()) {
                const quizId = `quiz-${Date.now()}`;
                addQuiz(quizId);
                console.log('quiz commencé:', quizId);
            } else {
                navigate('/');
                startLimitTimer();
                console.log(timeLimit)
            }
        } 
    };

    return (
        <div className='mt-4 grid grid-cols-2 gap-4 md:w-2/4'>
            {subjectSelector.map(({ label, subjects }) => (
                <DropdownMenu key={label}>
                    <DropdownMenuTrigger asChild>
                        <Button className='w-full'>{label}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {subjects.map(({ id, label, path, type }: Subject) => (
                            <DropdownMenuItem key={id}>
                                <Link
                                    to={`/jouer/${path}`}
                                    className='w-full'
                                    onClick={() => {
                                        console.log(type);
                                        setTimer(15);
                                        generateQuestion(type);
                                        handleStartQuiz();
                                    }}
                                >
                                    {label}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            ))}
        </div>
    );
}
