import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LoginModal from '@/components/Auth/Modals/LoginModal';
import { loginUser } from '@/services/authToBack';
import { loginSchema } from '@/lib/zod-schemas';

export default function LoginForm() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    });

    const [loginStatus, setLoginStatus] = useState<string>('');
    const [loginMessage, setLoginMessage] = useState<string>('');
    const [buttonColor, setButtonColor] = useState<string>('');
    const [showLoginDialog, setShowLoginDialog] = useState<boolean>(false);
    const [colorTitle, setColorTitle] = useState<string>('');

    const resetForm = (): void =>
        form.reset({
            username: '',
            password: '',
        });

    const handleLogin = async (data: z.infer<typeof loginSchema>) => {
        try {
            await loginUser(data);
            setColorTitle('text-green-500');
            setButtonColor('bg-green-500 hover:bg-green-500/90');
            setLoginStatus('Connexion réussie');
            setLoginMessage('Bravo tu es maintenant connecté !');
            setShowLoginDialog(true);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error, "Erreur d'envoie des données au back");
                setColorTitle('text-red-500');
                setButtonColor('bg-red-500 hover:bg-red-500/90');
                setLoginStatus('Erreur de connexion');
                setLoginMessage(error.message);
                setShowLoginDialog(true);
            }
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleLogin)}
                className='space-y-4'
            >
                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pseudo</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='pseudo'
                                    type='text'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mot de passe</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='mot de passe'
                                    type='password'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='grid grid-cols-2 gap-4'>
                    <Button
                        type='submit'
                        onClick={() => setShowLoginDialog(true)}
                    >
                        Se connecter
                    </Button>

                    <LoginModal
                        loginMessage={loginMessage}
                        loginStatus={loginStatus}
                        colorTitle={colorTitle}
                        open={showLoginDialog}
                        onOpenChange={(open) => setShowLoginDialog(open)}
                        onClose={resetForm}
                        buttonColor={buttonColor}
                    />
                </div>
            </form>
        </Form>
    );
}
