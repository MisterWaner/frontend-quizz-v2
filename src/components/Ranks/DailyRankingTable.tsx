import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableHeader,
} from '@/components/ui/table';
import { User } from '@/lib/types';
import { getDailyScores } from '@/services/getScoresData';

export default function DailyRankingTable() {
    const [usersDailyScores, setUsersDailyScores] = useState<User[]>([]);

    useEffect(() => {
        getDailyScores()
            .then((data) => {
                setUsersDailyScores(data);
            })
            .catch((error) => {
                console.error(
                    'Une erreur est survenue lors de la récupération des scores',
                    error
                );
            });
    }, []);

    return (
        <Table className=''>
            <TableHeader>
                <TableRow className=''>
                    <TableHead className='w-1/5 text-center'>
                        Position
                    </TableHead>
                    <TableHead className='w-2/5 text-center'>Pseudo</TableHead>
                    <TableHead className='w-2/5 text-center'>Score</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {usersDailyScores.map((user, idx) => (
                    <TableRow key={idx}>
                        <TableCell className='text-center'>{idx + 1}</TableCell>
                        <TableCell className='text-center'>
                            {user.username}
                        </TableCell>
                        <TableCell className='text-center'>
                            {user.score}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
