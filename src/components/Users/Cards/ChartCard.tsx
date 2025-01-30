import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { chartData } from '@/lib/dummy-data';

const chartConfig = {
    lastTotal: {
        label: 'Total N-1',
        color: '#2563eb',
    },
    currentTotal: {
        label: 'Total',
        color: '#60a5fa',
    },
} satisfies ChartConfig;

const data = chartData;

export default function ChartCard() {

    const year = new Date().getFullYear();

    return (
        <Card className='max-md:w-full md:w-1/2 mt-10'>
            <CardHeader>
                <CardTitle className='text-center text-xl font-bold'>{(year -1)} / {year}</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart data={data}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey='month'
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar
                            dataKey='lastTotal'
                            fill='var(--chart-color-lastTotal)'
                            radius={4}
                        />
                        <Bar
                            dataKey='currentTotal'
                            fill='var(--chart-color-currentTotal)'
                            radius={4}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
