import { Subject } from './types';

type SubjectSelectorData = {
    label: string;
    subjects: Subject[];
};

export const subjectSelectorData: SubjectSelectorData[] = [
    {
        label: 'Mathématiques',
        subjects: [
            { id: 1, label: 'Addition', path: 'addition', type: 'addition' },
            {
                id: 2,
                label: 'Soustraction',
                path: 'soustraction',
                type: 'soustraction',
            },
            {
                id: 3,
                label: 'Multiplication',
                path: 'multiplication',
                type: 'multiplication',
            },
            {
                id: 4,
                label: 'Calculs aléatoires',
                path: 'random',
                type: 'random',
            },
        ],
    },
];
