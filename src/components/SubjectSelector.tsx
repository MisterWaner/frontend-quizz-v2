import { useNavigate } from 'react-router';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectSeparator,
} from './ui/select';

import { useQuizStore } from '@/store/QuizStore';
import { subjectSelectorData } from '@/lib/subject-selector-data';
import { Subject } from '@/lib/types';
import { Button } from './ui/button';

export default function SubjectSelector() {
    const subjectSelector = subjectSelectorData;
    const navigate = useNavigate();
    const generateQuestion = useQuizStore((state) => state.generateQuestion);
    const setTimer = useQuizStore((state) => state.setTimer);

    return (
        <div className='mt-4 grid grid-cols-2 gap-4 md:w-2/4 '>
            {subjectSelector.map(({ name, id, subtype, subjects }) => (
                <Select key={id}>
                    <SelectTrigger className='font-bold'>
                        <SelectValue placeholder={name} />
                    </SelectTrigger>
                    <SelectContent>
                        {subtype ? (
                            <SelectGroup>
                                <SelectLabel>{subtype.label}</SelectLabel>
                                <SelectSeparator />
                                {subtype.subjects.map(
                                    ({ id, label }: Subject) => (
                                        <SelectItem key={id} value={label}>
                                            {label}
                                        </SelectItem>
                                    )
                                )}
                            </SelectGroup>
                        ) : (
                            <SelectGroup>
                                {subjects?.map(({ id, label }: Subject) => (
                                    <SelectItem key={id} value={label}>
                                        {label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        )}
                    </SelectContent>
                </Select>
            ))}
            <Button
                className='w-full xl:w-1/2'
                onClick={(type: string, name: string, path: string) => {
                    generateQuestion(type, name);
                    setTimer(15);
                    navigate(`/jouer/${path}`);
                }}
            >
                Sélectionner
            </Button>
        </div>
    );
}
