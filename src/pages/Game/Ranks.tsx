import DailyRankingTable from '@/components/Ranks/DailyRankingTable';
import ContentSection from '@/components/ContentSection';

export default function Ranks() {
    return (
        <>
            <h2 className='text-3xl font-bold text-center mt-10'>
                Les classements.
            </h2>
            <ContentSection>
                <DailyRankingTable />
            </ContentSection>
        </>
    );
}
