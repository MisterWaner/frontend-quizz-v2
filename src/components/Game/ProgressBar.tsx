import { Progress } from '@/components/ui/progress';
import { useQuizStore } from '@/store/QuizStore';

export default function ProgressBar() {
    const progress = useQuizStore((state) => state.progress);

    if (progress <= 50) {
        return (
            <Progress
                value={progress}
                
                className='md:w-1/2 mx-auto mt-10'
                indicatorColor='bg-red-500'
            />
        );
    } else if (progress > 50 && progress <= 100) {
        return (
            <Progress
                value={progress}
                className='md:w-1/2 mx-auto mt-10'
                indicatorColor='bg-green-500'
            />
        );
    } 
}
