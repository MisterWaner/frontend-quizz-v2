import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useQuizStore } from '@/store/QuizStore';

import NextQuestionModal from '@/components/Modals/NextQuestionModal';

export default function QuestionCard() {
    const { questions, currentQuestionIndex } = useQuizStore();
    const userAnswer = useQuizStore((state) => state.userAnswer);

    if (!questions || questions.length === 0) {
        return null;
    }

    const currentQuestion = questions[currentQuestionIndex];

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        useQuizStore.setState({
            userAnswer: value,
        });
    }

    return (
        <Card className='md:w-1/2 mx-auto mt-24'>
            <CardHeader>
                <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className='text-sm italic'>{currentQuestion?.label}</p>
                <div className='grid grid-cols-3 items-center gap-4 mt-4'>
                    <Label>Ta réponse :</Label>
                    <Input
                        type='text'
                        className='col-span-2'
                        placeholder='Réponse'
                        onChange={handleInputChange}
                        value={userAnswer}
                    />
                </div>
            </CardContent>
            <CardFooter className='justify-end'>
                <NextQuestionModal />
            </CardFooter>
        </Card>
    );
}
