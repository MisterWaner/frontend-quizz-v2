import { Outlet } from 'react-router';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import PrivateRoute from '@/routes/Private/PrivateRoute';
import AuthWrapper from '@/components/Users/AuthWrapper';
import Header from '@/components/Header/Header';
import AppSideBar from '@/components/Users/SideBar/AppSideBar';
import { useLayoutStore } from '@/store/LayoutStore';

export default function AuthLayout() {
    const isSidebarOpen = useLayoutStore((state) => state.isSidebarOpen);
    const { openSidebar, closeSidebar } = useLayoutStore();

    function handleSidebar() {
        if (isSidebarOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
        console.log(isSidebarOpen);
    }

    return (
        <SidebarProvider>
            <PrivateRoute>
                <AppSideBar />
                <Header />
                <div className='relative top-28 w-full h-[calc(100dvh-112px)]'>
                    <SidebarTrigger
                        className='text-neutral-950'
                        onClick={handleSidebar}
                    />
                    <AuthWrapper>
                        <Outlet />
                    </AuthWrapper>
                </div>
            </PrivateRoute>
        </SidebarProvider>
    );
}
