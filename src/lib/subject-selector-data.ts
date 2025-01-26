import { Subject } from './types';

type SubjectSelectorData = {
    name: string;
    subtype?: string;
    subjects: Subject[];
};

export const subjectSelectorData: SubjectSelectorData[] = [
    {
        name: 'Mathématiques',
        subtype: 'Opérations',
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
    {
        name: 'Géographie',
        subtype: 'Capitales',
        subjects: [
            {
                id: 1,
                label: 'Capitales Européennes',
                path: 'capitales-europeennes',
                type: 'european',
            },
            {
                id: 2,
                label: 'Capitales Américaines',
                path: 'capitales-americaines',
                type: 'american',
            },
            {
                id: 3,
                label: 'Capitales Asiatiques',
                path: 'capitales-asiatiques',
                type: 'asian',
            },
            {
                id: 4,
                label: 'Capitales Africaines',
                path: 'capitales-africaines',
                type: 'african',
            },
            {
                id: 5,
                label: 'Capitales Océaniques',
                path: 'capitales-oceaniques',
                type: 'oceanic',
            },
            {
                id: 6,
                label: 'Capitales Aléatoires',
                path: 'capitales-aleatoires',
                type: 'random',
            },
        ],
    },
];
