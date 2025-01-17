import { User, Settings, ChartArea, Boxes, Home, LogIn } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const menuLinks: {
    id: number;
    label: string;
    path: string;
    icon: LucideIcon;
}[] = [
    {
        id: 1,
        label: 'Accueil',
        path: '/',
        icon: Home,
    },
    {
        id: 2,
        label: 'Jouer',
        path: '/jouer',
        icon: Boxes,
    },
    {
        id: 3,
        label: 'Classements',
        path: '/classements',
        icon: ChartArea,
    },
    {
        id: 4,
        label: 'Se Connecter',
        path: '/connexion',
        icon: LogIn,
    },
];

const connectedMenuLinks: {
    id: number;
    label: string;
    path: string;
    icon: LucideIcon;
}[] = [
    {
        id: 1,
        label: 'Mon compte',
        path: '/compte',
        icon: User,
    },
    {
        id: 2,
        label: 'Jouer',
        path: '/jouer',
        icon: Boxes,
    },
    {
        id: 3,
        label: 'Classements',
        path: '/classements',
        icon: ChartArea,
    },
    {
        id: 4,
        label: 'Paramètres',
        path: '/parametres',
        icon: Settings,
    },
];

export { menuLinks, connectedMenuLinks };
