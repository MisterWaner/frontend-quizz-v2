import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useAuthToken from '@/hooks/useAuthToken';
export default function SummaryCard() {
    const { userInfo } = useAuthToken();

    const username = userInfo?.username;
    const score =
        localStorage.getItem('score') === null
            ? 0
            : Number(localStorage.getItem('score'));
    const currentMonthScore = userInfo?.currentMonthScore;
    
    return (
        <Card className='max-md:w-full md:w-1/2 mt-10'>
            <CardHeader>
                <CardTitle>Bonjour {username}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Score du jour : {score}</p>
                <p>Score du mois : {currentMonthScore}</p>
            </CardContent>
        </Card>
    );
}
