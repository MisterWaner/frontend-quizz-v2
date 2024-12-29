import { Link } from 'react-router';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import SignInForm from '../Forms/SignInForm';

export default function SignInCard() {
    return (
        <Card className='max-sm:w-10/12 max-md:w-8/12 md:w-6/12 lg:w-4/12 flex flex-col items-center'>
            <CardHeader className='w-full flex justify-center items-center'>
                <CardTitle className='text-2xl font-bold'>
                    Inscription
                </CardTitle>
            </CardHeader>
            <CardContent>
                <SignInForm />
                <div className='mt-5'>
                    <p className='text-sm italic text-neutral-400'>
                        Déjà inscrit ?{' '}
                        <Link
                            to='/connexion'
                            className='text-neutral-950 font-semibold underline underline-offset-4'
                        >
                            Connecte toi !
                        </Link>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
