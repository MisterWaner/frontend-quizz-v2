import PrivateRoute from '@/routes/Private/PrivateRoute';
import { Outlet } from 'react-router';;
import Wrapper from '@/components/Wrapper';
import UsedHeader from '@/components/Header/UsedHeader';

export default function AuthLayout() {
    return (
        <PrivateRoute>
            <UsedHeader />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </PrivateRoute>
    );
}
