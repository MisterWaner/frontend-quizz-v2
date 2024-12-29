import { Progress } from '@/components/ui/progress';
import { useQuizStore } from '@/store/QuizStore';

export default function ProgressBar() {
    const progress = useQuizStore((state) => state.progress);
    const totalProgress = useQuizStore((state) => state.totalProgress);

    if (progress < 40) {
        return (
            <Progress
                value={progress}
                className='md:w-1/2 mx-auto mt-10'
                indicatorColor='bg-red-500'
            />
        );
    } else if (progress >= 40 && progress <= 70) {
        return (
            <Progress
                value={progress}
                className='md:w-1/2 mx-auto mt-10'
                indicatorColor='bg-yellow-500'
            />
        );
    } else if (progress > 70 && progress <= totalProgress) {
        return (
            <Progress
                value={progress}
                className='md:w-1/2 mx-auto mt-10'
                indicatorColor='bg-green-500'
            />
        );
    }
}
