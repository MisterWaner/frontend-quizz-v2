import { useNavigate } from 'react-router';
import {
    Sheet,
    SheetTitle,
    SheetHeader,
    SheetTrigger,
    SheetContent,
    SheetClose,
    SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';
import { MobileNavButton } from '@/components/Header/Nav/NavButtons';
import { connectedMenuLinks } from '@/lib/menu-links';
import useAuthToken from '@/hooks/useAuthToken';
import { updateCurrentMonthScore } from '@/services/sendDataToBack';
import { useAuthStore } from '@/store/AuthStore';


export default function ConnectedMobileNav() {
    const { userInfo } = useAuthToken();
    const { logoutUser } = useAuthStore();
    const navigate = useNavigate();

    const handleUpdateCurrentMonthScore = async () => {
        const score = Number(localStorage.getItem('score'));
        const currentMonthScore: number = userInfo?.currentMonthScore ?? 0;
        console.log(
            'Score:',
            score,
            'Current Month Score:',
            currentMonthScore
        );
        const response = await updateCurrentMonthScore(
            score,
            currentMonthScore
        );
        console.log('Update Score API response status:', response);
    };
    const handleLogout = async () => {
        try {
            if (userInfo) {
                await logoutUser(userInfo);
                navigate('/connexion');
            }
        } catch (error) {
            console.error(
                'Une erreur est survenue lors de la déconnexion',
                error
            );
        }
    };

    return (
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant='ghost'>
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent aria-description='Menu principal' side={'top'}>
                    <SheetDescription className='flex flex-row justify-between items-center space-y-0'></SheetDescription>
                    <SheetTitle className='flex flex-row justify-between items-center space-y-0'></SheetTitle>
                    <SheetHeader className='flex flex-row justify-between items-center space-y-0'>
                        <span></span>
                        <SheetClose asChild>
                            <Button variant='ghost' className=''>
                                <X className='h-4 w-4 text-neutral-50' />
                            </Button>
                        </SheetClose>
                    </SheetHeader>
                    <ul className='w-full flex flex-col items-center gap-3'>
                        {connectedMenuLinks.map((link) => (
                            <MobileNavButton key={link.id} {...link} />
                        ))}
                        <li className='text-neutral-50'>
                            <SheetClose asChild>
                                <Button
                                    variant='ghost'
                                    onClick={() => {
                                        handleUpdateCurrentMonthScore();
                                        handleLogout();
                                    }}
                                >
                                    SE DÉCONNECTER
                                </Button>
                            </SheetClose>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
