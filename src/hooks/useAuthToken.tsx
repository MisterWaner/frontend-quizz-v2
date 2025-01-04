import { useState, useEffect } from 'react';
import { User } from '@/lib/types';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export default function useAuthToken() {
    const [token, setToken] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<User | null>(null);

    useEffect(() => {
        function fetchTokenAndUserInfo() {
            try {
                const token = Cookies.get('token');

                if (!token) {
                    throw new Error("Vous n'êtes pas connecté");
                }

                const { username, id, isRegistered, score, currentMonthScore }: User =
                    jwtDecode(token);

                setToken(token);
                setUserInfo({ username, id, isRegistered, score, currentMonthScore });
            } catch (error) {
                console.error('Erreur lors de la récupération du token', error);
            }
        }
        fetchTokenAndUserInfo();
    }, []);

    console.log(userInfo);
    return { token, userInfo };
}
