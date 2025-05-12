import { ApiProperty } from '@nestjs/swagger';

export class DatasetDto {
    @ApiProperty({ example: 'Satisfaction Rate (%)', description: 'Label for the dataset' })
    label: string;

    @ApiProperty({ example: [100, 96.24, 90.31], description: 'Monthly satisfaction rate percentages' })
    data: number[];

    @ApiProperty({ example: false, description: 'Whether to fill the area under the line' })
    fill: boolean;

    @ApiProperty({ example: 'rgba(75, 192, 192, 1)', description: 'Border color for the line' })
    borderColor: string;

    @ApiProperty({ example: 'rgba(75, 192, 192, 0.2)', description: 'Background color for the chart' })
    backgroundColor: string;

    @ApiProperty({ example: 0.1, description: 'Line tension value for the chart' })
    tension: number;
}

export class SatisfactionTrendDto {
    @ApiProperty({
        example: ['2024-05', '2024-06', '2024-07', '2024-08', '2024-09', '2024-10', '2024-11', '2024-12'],
        description: 'Month labels for the trend data'
    })
    labels: string[];

    @ApiProperty({
        type: [DatasetDto],
        description: 'Datasets for the satisfaction trend chart'
    })
    datasets: DatasetDto[];
} 