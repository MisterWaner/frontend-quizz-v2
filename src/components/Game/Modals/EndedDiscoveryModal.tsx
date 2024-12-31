import { useNavigate } from 'react-router';
import { LogIn, UserX } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogDescription,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export default function EndedDiscoveryModal() {

    const navigate = useNavigate();


    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className='font-semibold w-3/6'>Terminer</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Tu as terminé la découverte !
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    Tu peux créer ton compte pour continuer à jouer et
                    sauvegarder ton score.
                </AlertDialogDescription>
                <AlertDialogFooter className='flex flex-row gap-2 mt-2'>
                    <AlertDialogAction asChild>
                        <Button
                            className='font-semibold w-3/6 self-end'
                            onClick={() => navigate('/inscription')}
                        >
                            Créer mon compte
                            <LogIn className='ml-2 h-4 w-4' />
                        </Button>
                    </AlertDialogAction>
                    <AlertDialogCancel asChild>
                        <Button
                            className='font-semibold w-3/6'
                            variant='destructive'
                            onClick={() => navigate('/')}
                        >
                            Terminer
                            <UserX className='ml-2 h-4 w-4' />
                        </Button>
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
