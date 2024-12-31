import { useNavigate, useParams } from 'react-router';
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

import { useQuizStore } from '@/store/QuizStore';

export default function SaveScoreModal() {
    const { resetScore, resetTimer, resetProgress, generateQuestion } =
        useQuizStore();
    const navigate = useNavigate();
    const { type } = useParams();

    function handleSaveScore() {
        resetScore();
        resetTimer();
        resetProgress();
        navigate('/jouer');
    }

    function handleReset() {
        resetScore();
        resetTimer();
        resetProgress();
        if (type) {
            generateQuestion(type);
        }
    }

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
                        <Button
                            className='font-semibold w-3/6'
                            onClick={() => handleReset()}
                        >
                            Recommencer
                            <RotateCcw className='ml-2 h-4 w-4' />
                        </Button>
                    </AlertDialogAction>
                    <AlertDialogAction asChild>
                        <Button
                            className='font-semibold w-3/6'
                            onClick={() => handleSaveScore()}
                        >
                            Tous les quizz
                            <List className='ml-2 h-4 w-4' />
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
