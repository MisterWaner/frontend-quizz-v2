import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import SaveScoreModal from '../Modals/SaveScoreModal';

export default function EndGameCard() {
    return (
        <Card className='md:w-1/2 mx-auto mt-24'>
            <CardHeader>
                <CardTitle className='text-center text-lg uppercase text-green-500'>
                    Fin !
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-sm font-bold text-green-500'>
                    Bravo John ! Tu as terminé le quiz !
                </p>
            </CardContent>
            <CardFooter className='justify-end'>
                <SaveScoreModal />
            </CardFooter>
        </Card>
    );
}
