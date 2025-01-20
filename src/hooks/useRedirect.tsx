import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

export function useRedirect() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            navigate('/compte');
        } else {
            navigate('/');
        }
    }, [navigate]);
}

