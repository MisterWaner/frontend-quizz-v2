import { Outlet } from 'react-router';
import UsedHeader from '@/components/Header/UsedHeader';

export default function GameLayout() {
    return (
        <>
            <UsedHeader />
            <Outlet />
        </>
    );
}
