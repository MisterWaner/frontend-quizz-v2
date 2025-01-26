import { Link } from 'react-router';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
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
            {subjectSelector.map(({ name, subjects, subtype }) => (
                <DropdownMenu key={name}>
                    <DropdownMenuTrigger asChild>
                        <Button className='w-full'>{name}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-96'>
                        {subtype && (
                            <DropdownMenuGroup>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        {subtype}
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent className='w-96'>
                                            {subjects.map(
                                                ({
                                                    id,
                                                    label,
                                                    path,
                                                    type,
                                                }: Subject) => (
                                                    <DropdownMenuItem key={id}>
                                                        <Link
                                                            to={`/jouer/${path}`}
                                                            className='w-full'
                                                            onClick={() => {
                                                                console.log(
                                                                    type
                                                                );
                                                                setTimer(15);
                                                                generateQuestion(
                                                                    type,
                                                                    name
                                                                );
                                                                console.log(
                                                                    label,
                                                                    name
                                                                );
                                                            }}
                                                        >
                                                            {label}
                                                        </Link>
                                                    </DropdownMenuItem>
                                                )
                                            )}
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                            </DropdownMenuGroup>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            ))}
        </div>
    );
}
