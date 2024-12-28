import LoginCard from '@/components/Cards/LoginCard';
import ContentSection from '@/components/ContentSection';
import Wrapper from '@/components/Wrapper';

export default function Login() {
    return (
        <Wrapper>
            <ContentSection>
                <div className='flex flex-col justify-center items-center'>
                    <LoginCard />
                </div>
            </ContentSection>
        </Wrapper>
    );
}
