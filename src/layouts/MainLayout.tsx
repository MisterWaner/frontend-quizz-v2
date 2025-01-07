import { Outlet } from 'react-router';
import Wrapper from '@/components/Wrapper';
import UsedHeader from '@/components/Header/UsedHeader';

export default function MainLayout() {
    return (
        <>
            <UsedHeader />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </>
    );
}
