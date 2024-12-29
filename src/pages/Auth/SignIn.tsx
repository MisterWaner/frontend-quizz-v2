import SignInCard from '@/components/Auth/Cards/SignInCard';
import ContentSection from '@/components/ContentSection';
import Wrapper from '@/components/Wrapper';

export default function SignIn() {
    return (
        <Wrapper>
            <ContentSection>
                <div className='flex flex-col justify-center items-center'>
                    <SignInCard />
                </div>
            </ContentSection>
        </Wrapper>
    );
}
