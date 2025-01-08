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
import RegisterModal from '@/components/Auth/Modals/RegisterModal';
import { useAuthStore } from '@/store/AuthStore';
import { registerSchema } from '@/lib/zod-schemas';

export default function SignInForm() {
    const {
        registerUser,
        registerStatus,
        registerMessage,
        showRegisterDialog,
        colorTitle,
        setShowRegisterDialog,
    } = useAuthStore();

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: '',
            password: '',
            confirmation: '',
        },
    });

    const handleRegister = async (values: z.infer<typeof registerSchema>) => {
        try {
            await registerUser(values);
            console.log(values);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error, "Erreur d'envoie des données au back");
                console.log(values);
            }
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleRegister)}
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
                <FormField
                    control={form.control}
                    name='confirmation'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirmation</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='confirmation'
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
                        className='col-start-2'
                        disabled={!form.formState.isValid}
                    >
                        S'inscrire
                    </Button>
                    <RegisterModal
                        registerStatus={registerStatus}
                        registerMessage={registerMessage}
                        colorTitle={colorTitle}
                        open={showRegisterDialog}
                        onOpenChange={(open) => setShowRegisterDialog(open)}
                    />
                </div>
            </form>
        </Form>
    );
}
