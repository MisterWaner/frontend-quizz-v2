import { Navigate } from 'react-router';
import useAuthToken from '@/hooks/useAuthToken';

export default function PrivateRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const { userInfo } = useAuthToken();

    if (!userInfo) {
        return <Navigate to='/connexion' />;
    }

    return children;
}
