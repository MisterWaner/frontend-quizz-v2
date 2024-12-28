import { useParams } from 'react-router';

import Wrapper from '@/components/Wrapper';
import ContentSection from '@/components/ContentSection';
import QuestionCard from '@/components/Cards/QuestionCard';
import EndGameCard from '@/components/Cards/EndGameCard';

import { useQuizStore } from '@/store/QuizStore';

export default function Quiz() {
    const { type } = useParams();

    const totalQuestions = useQuizStore((state) => state.totalQuestions);
    const currentQuestionIndex = useQuizStore(
        (state) => state.currentQuestionIndex
    );
    return (
        <Wrapper>
            <h2 className='text-3xl font-bold text-center'>
                {type?.toLocaleUpperCase()}
            </h2>
            {totalQuestions === currentQuestionIndex + 1 ? (
                <ContentSection>
                    <EndGameCard />
                </ContentSection>
            ) : (
                <ContentSection>
                    <QuestionCard />
                </ContentSection>
            )}
        </Wrapper>
    );
}
