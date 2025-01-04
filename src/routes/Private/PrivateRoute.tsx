import { Navigate } from 'react-router';

export default function PrivateRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const isConnected = true;

    if (!isConnected) {
        return <Navigate to='/connexion' />;
    }

    return children;
}
