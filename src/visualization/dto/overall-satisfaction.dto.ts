import { ApiProperty } from '@nestjs/swagger';

class SatisfactionDatasetDto {
    @ApiProperty({ example: 'Overall Satisfaction', description: 'Label for the dataset' })
    label: string;

    @ApiProperty({ example: [67601, 5704], description: 'Number of satisfied and dissatisfied responses' })
    data: number[];

    @ApiProperty({ 
        example: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'], 
        description: 'Background colors for satisfied and dissatisfied segments' 
    })
    backgroundColor: string[];

    @ApiProperty({ 
        example: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'], 
        description: 'Border colors for satisfied and dissatisfied segments' 
    })
    borderColor: string[];

    @ApiProperty({ example: 1, description: 'Border width for chart elements' })
    borderWidth: number;
}

export class OverallSatisfactionDto {
    @ApiProperty({ 
        example: ['Satisfied', 'Dissatisfied'],
        description: 'Labels for the satisfaction categories'
    })
    labels: string[];

    @ApiProperty({
        type: [SatisfactionDatasetDto],
        description: 'Dataset for the overall satisfaction chart'
    })
    datasets: SatisfactionDatasetDto[];
} 