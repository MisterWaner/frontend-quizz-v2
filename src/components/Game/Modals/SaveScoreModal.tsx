import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { List } from 'lucide-react';

export default function SaveScoreModal() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className='font-semibold w-3/6'>
                    Enregistrer mon score
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Ton score a été enregistré !
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter className='flex flex-row gap-2'>
                    <AlertDialogAction asChild>
                        <Button className='font-semibold w-3/6'>
                            Recommencer
                            <RotateCcw className='ml-2 h-4 w-4' />
                        </Button>
                    </AlertDialogAction>
                    <AlertDialogAction asChild>
                        <Button className='font-semibold w-3/6'>
                            Tous les quizz
                            <List className='ml-2 h-4 w-4' />
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
