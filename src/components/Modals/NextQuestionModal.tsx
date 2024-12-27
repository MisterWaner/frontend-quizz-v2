import { SendHorizonal } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogAction,
    AlertDialogDescription,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export default function ResultModal() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className='font-semibold w-2/6'>Valider</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogDescription style={{ visibility: 'hidden' }}>
                    Fenêtre de confirmation
                </AlertDialogDescription>
                <AlertDialogHeader>
                    <AlertDialogTitle>Résultat</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>
                        <span>Suivant</span>
                        <SendHorizonal className='ml-2 h-4 w-4' />
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
