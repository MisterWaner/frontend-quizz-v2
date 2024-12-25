import { Outlet } from 'react-router';
import Wrapper from '@/components/Wrapper';
import Header from '@/components/Header/Header';

export default function MainLayout() {
    return (
        <>
            <Header />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </>
    );
}
