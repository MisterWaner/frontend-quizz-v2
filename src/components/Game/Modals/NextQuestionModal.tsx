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

import { useQuizStore } from '@/store/QuizStore';

export default function NextQuestionModal({
    handleSetResetTimer,
}: {
    handleSetResetTimer: () => void;
}) {
    const { handleNextQuestion, checkUserAnswer } = useQuizStore();

    const dialogTitle = useQuizStore((state) => state.dialogTitle);
    const dialogTitleStyle = useQuizStore((state) => state.dialogTitleStyle);
    const dialogActionStyle = useQuizStore((state) => state.dialogActionStyle);
    const userAnswer = useQuizStore((state) => state.userAnswer);

    function handleSubmit() {
        checkUserAnswer(userAnswer);
        useQuizStore.setState({
            userAnswer: '',
        });
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className='font-semibold w-2/6' onClick={handleSubmit}>
                    Valider
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogDescription style={{ visibility: 'hidden' }}>
                    Fenêtre de confirmation
                </AlertDialogDescription>
                <AlertDialogHeader>
                    <AlertDialogTitle className={dialogTitleStyle}>
                        {dialogTitle}
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction asChild className={dialogActionStyle}>
                        <Button
                            className='font-semibold w-2/6'
                            onClick={() => {
                                handleNextQuestion();
                                handleSetResetTimer();
                            }}
                        >
                            Suivant
                            <SendHorizonal className='ml-2 h-4 w-4' />
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
