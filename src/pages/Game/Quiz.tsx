import { useParams } from 'react-router';

import Wrapper from '@/components/Wrapper';
import ContentSection from '@/components/ContentSection';
import QuestionCard from '@/components/Card/QuestionCard';
import EndGameCard from '@/components/Card/EndGameCard';

export default function Quiz() {
    const { type } = useParams();

    return (
        <Wrapper>
            <h2 className='text-3xl font-bold text-center'>
                {type?.toLocaleUpperCase()}
            </h2>
            <ContentSection>
                <QuestionCard />
            </ContentSection>
            <ContentSection>
                <EndGameCard />
            </ContentSection>
        </Wrapper>
    );
}
