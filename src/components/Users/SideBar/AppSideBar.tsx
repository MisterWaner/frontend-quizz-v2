import { Link } from 'react-router';
import { LogOut } from 'lucide-react';
import Cookies from 'js-cookie';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from '@/components/ui/sidebar';
import { connectedMenuLinks } from '@/lib/menu-links';
import useAuthToken from '@/hooks/useAuthToken';
import { useLayoutStore } from '@/store/LayoutStore';
import { useAuthStore } from '@/store/AuthStore';
import { updateCurrentMonthScore } from '@/services/sendDataToBack';

export default function AppSideBar() {
    const { userInfo } = useAuthToken();
    const { logoutUser } = useAuthStore();
    const { closeSidebar } = useLayoutStore();

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
        <Sidebar className='fixed bg-neutral-950 top-28  h-full'>
            <SidebarContent className='bg-neutral-950 text-white w-full'>
                <SidebarGroup className=''>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {connectedMenuLinks.map((item) => (
                                <SidebarMenuItem
                                    className='px-4 py-2'
                                    key={item.id}
                                    onClick={() => {
                                        closeSidebar();
                                    }}
                                >
                                    <SidebarMenuButton asChild>
                                        <Link to={item.path}>
                                            <item.icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem className='px-4 py-2'>
                                <SidebarMenuButton asChild>
                                    <Link
                                        to='/'
                                        onClick={() => {
                                            handleLogout();
                                            closeSidebar();
                                        }}
                                    >
                                        <LogOut />
                                        <span>Se déconnecter</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
