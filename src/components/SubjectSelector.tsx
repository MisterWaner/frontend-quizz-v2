import { Link } from 'react-router';

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';

import { useQuizStore } from '@/store/QuizStore';
import { subjectSelectorData } from '@/lib/subject-selector-data';
import { Subject } from '@/lib/types';

export default function SubjectSelector() {
    const subjectSelector = subjectSelectorData;

    const generateQuestion = useQuizStore((state) => state.generateQuestion);
    const setTimer = useQuizStore((state) => state.setTimer);

    return (
        <div className='mt-4 flex flex-col md:flex-row gap-4 md:w-2/4 '>
            {subjectSelector.map(({ name, id, subtype, subjects }) => (
                <DropdownMenu key={id}>
                    <DropdownMenuTrigger className='font-bold' asChild>
                        <Button className='md:w-96'>{name}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='md:w-96 w-56' align='start'>
                        {subtype ? (
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>
                                    {subtype.label}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {subtype.subjects.map(
                                    ({ id, label, path, type }: Subject) => (
                                        <DropdownMenuItem key={id}>
                                            <Link
                                                to={`/jouer/${path}`}
                                                className='cursor-pointer'
                                                onClick={() => {
                                                    generateQuestion(
                                                        type,
                                                        name
                                                    );
                                                    setTimer(15);
                                                }}
                                            >
                                                {label}
                                            </Link>
                                        </DropdownMenuItem>
                                    )
                                )}
                            </DropdownMenuGroup>
                        ) : (
                            <DropdownMenuGroup>
                                {subjects?.map(
                                    ({ id, label, path, type }: Subject) => (
                                        <DropdownMenuItem key={id} asChild>
                                            <Link
                                                to={`/jouer/${path}`}
                                                className='cursor-pointer'
                                                onClick={() => {
                                                    generateQuestion(
                                                        type,
                                                        name
                                                    );
                                                    setTimer(15);
                                                }}
                                            >
                                                {label}
                                            </Link>
                                        </DropdownMenuItem>
                                    )
                                )}
                            </DropdownMenuGroup>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            ))}
        </div>
    );
}
