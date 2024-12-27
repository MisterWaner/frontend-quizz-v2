import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import ResultModal from '@/components/Modals/NextQuestionModal';

export default function QuestionCard() {
    return (
        <Card className='md:w-1/2 mx-auto mt-24'>
            <CardHeader>
                <CardTitle>Question</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-sm italic'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>
                <div className='grid grid-cols-3 items-center gap-4 mt-4'>
                    <Label>Ta réponse :</Label>
                    <Input
                        type='text'
                        className='col-span-2'
                        placeholder='Réponse'
                    />
                </div>
            </CardContent>
            <CardFooter className='justify-end'>
                <ResultModal />
            </CardFooter>
        </Card>
    );
}
