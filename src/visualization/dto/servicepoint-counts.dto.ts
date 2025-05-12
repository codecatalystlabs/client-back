import { ApiProperty } from '@nestjs/swagger';

class ServicePointPercentageDto {
    @ApiProperty({ example: 10.5, description: 'Percentage of responses for today' })
    today: number;

    @ApiProperty({ example: 15.3, description: 'Percentage of responses for this month' })
    this_month: number;

    @ApiProperty({ example: 18.7, description: 'Percentage of cumulative responses' })
    cumulative: number;
}

export class ServicePointPercentagesDto {
    @ApiProperty({ example: 'success', description: 'Response status message' })
    status: string;

    @ApiProperty({
        example: {
            "OPD": {
                "today": 25.5,
                "this_month": 35.2,
                "cumulative": 40.0
            },
            "ART_clinic": {
                "today": 15.8,
                "this_month": 12.3,
                "cumulative": 10.5
            },
            "Antenatal": {
                "today": 10.2,
                "this_month": 8.7,
                "cumulative": 7.9
            }
            // Other service points...
        },
        description: 'Response percentages for various service points across different time periods'
    })
    data: {
        [key: string]: ServicePointPercentageDto;
    };
} 