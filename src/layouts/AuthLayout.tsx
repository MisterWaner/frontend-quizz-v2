import PrivateRoute from '@/routes/Private/PrivateRoute';
import { Outlet } from 'react-router';
import AuthWrapper from '@/components/Users/AuthWrapper';
import UsedHeader from '@/components/Header/UsedHeader';
import SideBar from '@/components/Users/SideBar/SideBar';
export default function AuthLayout() {
    return (
        <PrivateRoute>
            <UsedHeader />
            <div className='relative grid grid-cols-6 gap-4 top-28 h-[calc(100dvh-112px)]'>
                <SideBar />

                <AuthWrapper>
                    <Outlet />
                </AuthWrapper>
            </div>
        </PrivateRoute>
    );
}
