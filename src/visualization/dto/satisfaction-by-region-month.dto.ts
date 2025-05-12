import { ApiProperty } from '@nestjs/swagger';

export class SatisfactionByRegionMonthDto {
    @ApiProperty({ description: 'Status of the response' })
    status: string;

    @ApiProperty({
        description: 'Array of satisfaction data by region and month',
        type: 'array',
        items: {
            type: 'object',
            properties: {
                region: { type: 'string', description: 'Region name' },
                month: { type: 'string', description: 'Month in YYYY-MM format' },
                total_clients: { type: 'number', description: 'Total number of clients surveyed' },
                satisfied_clients: { type: 'number', description: 'Number of satisfied clients' }
            }
        }
    })
    data: Array<{
        region: string;
        month: string;
        total_clients: number;
        satisfied_clients: number;
    }>;
} 