import { Link } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import LoginForm from '../Forms/LoginForm';

export default function LoginCard() {
    return (
        <Card className='max-sm:w-10/12 max-md:w-8/12 md:w-6/12 lg:w-4/12 flex flex-col items-center'>
            <CardHeader className='w-full flex justify-center items-center'>
                <CardTitle className='text-2xl font-bold'>Connexion</CardTitle>
            </CardHeader>
            <CardContent>
                <LoginForm />
                <div className='mt-5'>
                    <p className='text-sm italic text-neutral-400'>
                        Pas encore de compte ?{' '}
                        <Link
                            to='/inscription'
                            className='text-neutral-950 font-semibold underline underline-offset-4'
                        >
                            Inscris toi !
                        </Link>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
