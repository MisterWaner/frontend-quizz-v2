import LoginCard from '@/components/Auth/Cards/LoginCard';
import ContentSection from '@/components/ContentSection';

export default function Login() {
    return (
        <div className='mt-28'>
            <ContentSection>
                <div className='flex flex-col justify-center items-center'>
                    <LoginCard />
                </div>
            </ContentSection>
        </div>
    );
}
