import { Navigate } from 'react-router';
import Cookies from 'js-cookie';

export default function PrivateRoute({
    children,
}: {
    children: React.ReactNode;
}) {
    const token = Cookies.get('token');
    
    if (!token) {
        return <Navigate to='/connexion' />;
    }

    return children;
}
