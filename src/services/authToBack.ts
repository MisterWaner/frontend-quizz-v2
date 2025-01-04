//import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { User } from '@/lib/types';

const BASE_URL = 'http://localhost:3001';

export async function logoutUser(user: User) {
    try {
        const response = await fetch(`${BASE_URL}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        // Log the API response status and body
        console.log('Logout API response status:', response.status);
        const responseBody = await response.text();
        console.log('Logout API response body:', responseBody);

        if (response.ok) {
            console.log('Déconnexion réussie');
        } else {
            throw new Error(
                'Une erreur est survenue lors de la déconnexion côté serveur.'
            );
        }
    } catch (error) {
        console.error('An error occurred during logout', error);
        throw error;
    } finally {
        Cookies.remove('token');
        localStorage.removeItem('score');
    }
}
