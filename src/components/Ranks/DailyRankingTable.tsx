import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableHeader,
} from '@/components/ui/table';

export default function DailyRankingTable() {
    return (
        <Table className='border border-neutral-950 '>
            <TableHeader>
                <TableRow>
                    <TableHead>Position</TableHead>
                    <TableHead>Pseudo</TableHead>
                    <TableHead>Score</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>John</TableCell>
                    <TableCell>10</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>John</TableCell>
                    <TableCell>10</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>John</TableCell>
                    <TableCell>10</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
