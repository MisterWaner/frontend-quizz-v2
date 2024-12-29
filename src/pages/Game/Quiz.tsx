import { useParams } from 'react-router';

import Wrapper from '@/components/Wrapper';
import ContentSection from '@/components/ContentSection';
import QuestionCard from '@/components/Game/Cards/QuestionCard';
import EndGameCard from '@/components/Game/Cards/EndGameCard';
import ProgressBar from '@/components/Game/ProgressBar';
import ScoreIndicator from '@/components/Game/ScoreIndicator';

import { useQuizStore } from '@/store/QuizStore';

export default function Quiz() {
    const { type } = useParams();

    const progress = useQuizStore((state) => state.progress);
    const totalProgress = useQuizStore((state) => state.totalProgress);
    
    console.log(progress, totalProgress);
    return (
        <Wrapper>
            <h2 className='text-3xl font-bold text-center'>
                {type?.toLocaleUpperCase()}
            </h2>
            {progress === totalProgress ? (
                <ContentSection>
                    <EndGameCard />
                </ContentSection>
            ) : (
                <>
                    <ContentSection>
                        <QuestionCard />
                    </ContentSection>
                    <ContentSection>
                        <ScoreIndicator />
                        <ProgressBar />
                    </ContentSection>
                </>
            )}
        </Wrapper>
    );
}
