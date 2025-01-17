import { Outlet } from 'react-router';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import Wrapper from '@/components/Wrapper';
import Header from '@/components/Header/Header';
import SideBar from '@/components/SideBar/SideBar';
import AppSideBar from '@/components/Users/SideBar/AppSideBar';
import { useLayoutStore } from '@/store/LayoutStore';
import useAuthToken from '@/hooks/useAuthToken';

export default function MainLayout() {
    const isSidebarOpen = useLayoutStore((state) => state.isSidebarOpen);
    const { openSidebar, closeSidebar } = useLayoutStore();

    const { userInfo } = useAuthToken();

    function handleSidebar() {
        if (isSidebarOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
        console.log(isSidebarOpen);
    }
    return (
        <SidebarProvider className=''>
            {userInfo ? <AppSideBar /> : <SideBar />}
            <Header />

            <div className='relative top-28 w-full h-[calc(100dvh-112px)]'>
                <SidebarTrigger
                    className='text-neutral-950'
                    onClick={handleSidebar}
                />
                <Wrapper>
                    <Outlet />
                </Wrapper>
            </div>
        </SidebarProvider>
    );
}
