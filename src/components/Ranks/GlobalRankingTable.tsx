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
import { getMonthlyScores } from '@/services/getScoresData';


export default function GlobalRankingTable() {
    const [usersMonthlyScores, setUsersMonthlyScores] = useState<User[]>([]);

    useEffect(() => {
        getMonthlyScores()
            .then((data) => {
                setUsersMonthlyScores(data);
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
                {usersMonthlyScores.map((user, idx) => (
                    <TableRow key={idx}>
                        <TableCell className='text-center'>{idx + 1}</TableCell>
                        <TableCell className='text-center'>
                            {user.username}
                        </TableCell>
                        <TableCell className='text-center'>
                            {user.currentMonthScore}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
