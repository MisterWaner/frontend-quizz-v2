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
import { useAuthStore } from '@/store/AuthStore';
import { loginSchema } from '@/lib/zod-schemas';

export default function LoginForm() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    });

    const {
        loginUser,
        loginStatus,
        loginMessage,
        showLoginDialog,
        colorTitle,
        buttonColor,
        setShowLoginDialog,
    } = useAuthStore();

    const resetForm = (): void =>
        form.reset({
            username: '',
            password: '',
        });

    const handleLogin = async (data: z.infer<typeof loginSchema>) => {
        try {
            await loginUser(data);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error, "Erreur d'envoie des données au back");
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
                <div className='flex justify-end'>
                    <Button
                        type='submit'
                        disabled={!form.formState.isValid}
                        className='w-full xl:w-1/2'
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
