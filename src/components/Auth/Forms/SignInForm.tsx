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
import RegisterModal from '@/components/Auth/Modals/RegisterModal';
import { registerUser } from '@/services/authToBack';
import { registerSchema } from '@/lib/zod-schemas';

export default function SignInForm() {
    const [registerStatus, setRegisterStatus] = useState<string>('');
    const [registerMessage, setRegisterMessage] = useState<string>('');
    const [showRegisterDialog, setShowRegisterDialog] =
        useState<boolean>(false);
    const [colorTitle, setColorTitle] = useState<string>('');

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
            setColorTitle('text-green-500');
            setRegisterStatus('Inscription réussie');
            setRegisterMessage('Bravo tu fais maintenant parti des ninjas !');
            setShowRegisterDialog(true);
            console.log(values);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error, "Erreur d'envoie des données au back");
                setColorTitle('text-red-500');
                setRegisterStatus("Erreur d'enregistrement");
                setRegisterMessage(error.message);
                setShowRegisterDialog(true);
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
                        onClick={() => setShowRegisterDialog(true)}
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
