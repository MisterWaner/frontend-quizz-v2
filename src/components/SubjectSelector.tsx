import { Link } from 'react-router';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from './ui/dropdown-menu';

import { useQuizStore } from '@/store/QuizStore';
import { subjectSelectorData } from '@/lib/subject-selector-data';
import { Subject } from '@/lib/types';

export default function SubjectSelector() {
    const subjectSelector = subjectSelectorData;

    const generateQuestion = useQuizStore((state) => state.generateQuestion);
    const setTimer = useQuizStore((state) => state.setTimer);

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
