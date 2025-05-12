import { ApiProperty } from '@nestjs/swagger';

// Using a generic Record type for the dynamic month data
class RegionTrendDto {
    @ApiProperty({ example: 'Acholi', description: 'Region name' })
    region: string;

    // Can't use decorators on index signatures, so we'll just document it in the class description
    // Month-based satisfaction rates (e.g., "2024-12": 84.93)
    [key: string]: string | number;
}

export class TrendsDataDto {
    @ApiProperty({ example: 'success', description: 'Response status message' })
    status: string;

    @ApiProperty({
        example: ['2024-12', '2025-01', '2025-02', '2025-03', '2025-04', '2025-05'],
        description: 'Months included in the trend data'
    })
    months: string[];

    @ApiProperty({
        type: [RegionTrendDto],
        description: 'Trend data for each region across months',
        example: [
            {
                region: 'Acholi',
                '2024-12': 84.93,
                '2025-01': 85.86,
                '2025-02': 89.37
            }
        ]
    })
    data: RegionTrendDto[];
} 