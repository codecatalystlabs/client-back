import { ApiProperty } from '@nestjs/swagger';

class DissatisfactionFactorDto {
    @ApiProperty({ example: 'Cost of services', description: 'Name of the dissatisfaction factor' })
    factor: string;

    @ApiProperty({ example: 8855, description: 'Count of responses citing this factor' })
    count: number;

    @ApiProperty({ example: 15.78, description: 'Percentage of total dissatisfaction attributed to this factor' })
    percentage: number;

    @ApiProperty({ example: 15.78, description: 'Cumulative percentage up to this factor' })
    cumulative_percentage: number;
}

export class DissatisfactionParetoDto {
    @ApiProperty({ example: 'success', description: 'Response status message' })
    status: string;

    @ApiProperty({ example: 56121, description: 'Total count of dissatisfaction responses' })
    total: number;

    @ApiProperty({
        type: [DissatisfactionFactorDto],
        description: 'Dissatisfaction factors sorted by frequency'
    })
    data: DissatisfactionFactorDto[];
} 