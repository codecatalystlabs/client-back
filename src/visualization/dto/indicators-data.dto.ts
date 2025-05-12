import { ApiProperty } from '@nestjs/swagger';

class IndicatorScoreDto {
    @ApiProperty({ example: 0, description: 'Score for today' })
    today: number;

    @ApiProperty({ example: 10, description: 'Score for this month' })
    this_month: number;

    @ApiProperty({ example: 7, description: 'Cumulative score' })
    cumulative: number;
}

export class IndicatorsDataDto {
    @ApiProperty({ example: 'success', description: 'Response status message' })
    status: string;

    @ApiProperty({
        example: {
            "Cleanliness": {
                "today": 0,
                "this_month": 10,
                "cumulative": 7
            },
            "Timeliness": {
                "today": 0,
                "this_month": 16,
                "cumulative": 12
            },
            // Other indicators...
            "Overall Satisfaction": {
                "today": 0,
                "this_month": 0,
                "cumulative": 0
            }
        },
        description: 'Scores for various indicators across different time periods'
    })
    data: {
        [key: string]: IndicatorScoreDto;
    };
} 