import PrivateRoute from '@/routes/Private/PrivateRoute';
import { Outlet } from 'react-router';
import ConnectedHeader from '@/components/Users/Header/ConnectedHeader';
import Wrapper from '@/components/Wrapper';

export default function AuthLayout() {
    return (
        <PrivateRoute>
            <ConnectedHeader />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </PrivateRoute>
    );
}
