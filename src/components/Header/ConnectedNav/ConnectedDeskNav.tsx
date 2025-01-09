import { Link } from 'react-router';
import Cookies from 'js-cookie';
import { connectedMenuLinks } from '@/lib/menu-links';
import { DesktopNavButton } from '@/components/Header/Nav/NavButtons';
import { Button } from '@/components/ui/button';
import useAuthToken from '@/hooks/useAuthToken';
import { updateCurrentMonthScore } from '@/services/sendDataToBack';
import { useAuthStore } from '@/store/AuthStore';

export default function ConnectedDeskNav() {
    const { userInfo } = useAuthToken();
    const { logoutUser } = useAuthStore();

    async function handleLogout() {
        if (userInfo) {
            try {
                await logoutUser(userInfo);
                const score = Number(localStorage.getItem('score'));
                const currentMonthScore: number =
                    userInfo?.currentMonthScore ?? 0;
                const response = await updateCurrentMonthScore(
                    score,
                    currentMonthScore
                );

                if (response.ok) {
                    Cookies.remove('token');
                    localStorage.removeItem('score');
                } else {
                    throw new Error(
                        'Une erreur est survenue lors de la déconnexion'
                    );
                }
            } catch (error) {
                console.error(
                    'Une erreur est survenue lors de la déconnexion',
                    error
                );
            }
        }
    }
    return (
        <nav className='w-full max-md:hidden'>
            <ul className='w-full flex justify-end items-center gap-3'>
                {connectedMenuLinks.map((link, index) => (
                    <li key={index} className='flex items-center'>
                        <DesktopNavButton {...link} />
                    </li>
                ))}
                <li>
                    <Link to='/connexion'>
                        <Button variant={'ghost'} onClick={handleLogout}>
                            SE DÉCONNECTER
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
