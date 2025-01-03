import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableHeader,
} from '@/components/ui/table';
import { User } from '@/lib/types';

const fakeData: User[] = [
    {
        id: 1,
        username: 'John',
        score: 10,
        isRegistered: 1,
    },
    {
        id: 2,
        username: 'Sam',
        score: 20,
        isRegistered: 1,
    },
    {
        id: 3,
        username: 'Tom',
        score: 30,
        isRegistered: 0,
    },
    {
        id: 4,
        username: 'Sarah',
        score: 25,
        isRegistered: 1,
    },
    {
        id: 5,
        username: 'Mike',
        score: 32,
        isRegistered: 0,
    },
];

export default function GlobalRankingTable() {
    const users = fakeData.sort((a, b) => b.score - a.score);
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
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell className='text-center'>{user.id}</TableCell>
                        <TableCell className='text-center'>
                            {user.isRegistered === 1
                                ? user.username
                                : `user-${user.username}`}
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
