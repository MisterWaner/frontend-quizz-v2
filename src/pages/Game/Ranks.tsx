import DailyRankingTable from '@/components/Ranks/DailyRankingTable';
import GlobalRankingTable from '@/components/Ranks/GlobalRankingTable';
import ContentSection from '@/components/ContentSection';
import RanksTableCard from '@/components/Ranks/RanksTableCard';

export default function Ranks() {
    return (
        <>
            <h2 className='text-3xl font-bold text-center mt-10'>
                Les classements.
            </h2>
            <div className="flex max-xl:flex-col gap-6">
                <ContentSection>
                    <RanksTableCard
                        title='Classement du jour'
                        description='Ce classement est mis à jour toutes les heures'
                        content={<DailyRankingTable />}
                    />
                </ContentSection>
                <ContentSection>
                    <RanksTableCard
                        title='Classement général'
                        description='Ce classement est mis à jour chaque jour'
                        content={<GlobalRankingTable />}
                    />
                </ContentSection>
            </div>
        </>
    );
}
