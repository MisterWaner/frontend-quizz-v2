import SignInCard from '@/components/Auth/Cards/SignInCard';
import ContentSection from '@/components/ContentSection';

export default function SignIn() {
    return (
        <div className='mt-28'>
            <ContentSection>
                <div className='flex flex-col justify-center items-center'>
                    <SignInCard />
                </div>
            </ContentSection>
        </div>
    );
}
