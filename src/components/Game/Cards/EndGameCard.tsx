import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import SaveScoreModal from '../Modals/SaveScoreModal';
import EndedDiscoveryModal from '../Modals/EndedDiscoveryModal';

import { useQuizStore } from '@/store/QuizStore';

export default function EndGameCard() {
    const score = useQuizStore((state) => state.score);

    return (
        <Card className='md:w-1/2 mx-auto mt-24'>
            <CardHeader>
                <CardTitle className='text-center text-lg uppercase text-green-500'>
                    Fin !
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-sm font-bold text-green-500'>
                    Bravo John ! Tu as terminé le quiz, ton score est de {score}/10 !
                </p>
            </CardContent>
            <CardFooter className='justify-end'>
                <SaveScoreModal />
                <EndedDiscoveryModal />
            </CardFooter>
        </Card>
    );
}
