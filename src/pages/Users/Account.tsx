import ContentSection from '@/components/ContentSection';
import ChartCard from '@/components/Users/Cards/ChartCard';
import SummaryCard from '@/components/Users/Cards/SummaryCard';

export default function Account() {
    return (
        <>
            <ContentSection>
                <SummaryCard />
            </ContentSection>
            <ContentSection>
                <ChartCard />
            </ContentSection>
        </>
    );
}
