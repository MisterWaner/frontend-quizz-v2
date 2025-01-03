import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function RanksTableCard({
    title,
    description,
    content,
}: {
    title: string;
    description?: string;
    content: React.ReactNode;
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className='h-80 rounded-md border border-neutral-950'>
                    {content}
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
