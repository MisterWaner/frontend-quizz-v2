import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
    loginUser as loginApi,
    registerUser as registerApi,
    logoutUser as logoutApi,
} from '@/services/authToBack';
import { User } from '@/lib/types';

export type AuthState = {
    loginStatus: string;
    loginMessage: string;
    registerStatus: string;
    registerMessage: string;
    showLoginDialog: boolean;
    showRegisterDialog: boolean;
    colorTitle: string;
    buttonColor: string;
};

type AuthAction = {
    loginUser: (user: User) => Promise<void>;
    registerUser: (user: User) => Promise<void>;
    logoutUser: (user: User) => Promise<void>;
    setShowLoginDialog: (show: boolean) => void;
    setShowRegisterDialog: (show: boolean) => void;
    resetLoginDialog: () => void;
    resetRegisterDialog: () => void;
};

export const useAuthStore = create<AuthState & AuthAction>()(
    persist(
        (set) => ({
            loginStatus: '',
            loginMessage: '',
            registerStatus: '',
            registerMessage: '',
            showLoginDialog: false,
            showRegisterDialog: false,
            colorTitle: '',
            buttonColor: '',

            loginUser: async (user: User) => {
                try {
                    await loginApi(user);
                    set({
                        loginStatus: 'Connexion réussie',
                        loginMessage: 'Bravo tu es maintenant connecté !',
                        showLoginDialog: true,
                        colorTitle: 'text-green-500',
                        buttonColor: 'bg-green-500 hover:bg-green-500/90',
                    });
                } catch (error) {
                    const message =
                        error instanceof Error
                            ? error.message
                            : 'Erreur inconnue lors de la connexion';
                    set({
                        loginStatus: 'Erreur de connexion',
                        loginMessage: message,
                        showLoginDialog: true,
                        colorTitle: 'text-red-500',
                        buttonColor: 'bg-red-500 hover:bg-red-500/90',
                    });
                    console.error('Erreur de connexion:', error);
                }
            },

            registerUser: async (user: User) => {
                try {
                    await registerApi(user);
                    set({
                        registerStatus: 'Inscription réussie',
                        registerMessage:
                            'Bravo tu fais maintenant parti des ninjas !',
                        showRegisterDialog: true,
                        colorTitle: 'text-green-500',
                        buttonColor: 'bg-green-500 hover:bg-green-500/90',
                    });
                } catch (error) {
                    const message =
                        error instanceof Error
                            ? error.message
                            : "Erreur inconnue lors de l'inscription";
                    set({
                        registerStatus: "Erreur d'inscription",
                        registerMessage: message,
                        showRegisterDialog: true,
                        colorTitle: 'text-red-500',
                        buttonColor: 'bg-red-500 hover:bg-red-500/90',
                    });
                    console.error("Erreur d'inscription:", error);
                }
            },
            logoutUser: async (user: User) => {
                try {
                    await logoutApi(user);
                    localStorage.removeItem('auth-store');
                    console.log('Déconnexion réussie');
                } catch (error) {
                    console.error(
                        'Une erreur est survenue lors de la déconnexion',
                        error
                    );
                }
            },
            resetLoginDialog: () => {
                set({
                    loginStatus: '',
                    loginMessage: '',
                    showLoginDialog: false,
                    colorTitle: '',
                    buttonColor: '',
                });
            },
            resetRegisterDialog: () => {
                set({
                    registerStatus: '',
                    registerMessage: '',
                    showRegisterDialog: false,
                    colorTitle: '',
                    buttonColor: '',
                });
            },
            setShowLoginDialog: (show: boolean) => {
                set({ showLoginDialog: show });
            },
            setShowRegisterDialog: (show: boolean) => {
                set({ showRegisterDialog: show });
            },
        }),
        {
            name: 'auth-store',
        }
    )
);
