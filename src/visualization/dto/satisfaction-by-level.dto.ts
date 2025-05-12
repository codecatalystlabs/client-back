import { ApiProperty } from '@nestjs/swagger';

export class SatisfactionByLevelDto {
    @ApiProperty({ example: 'success', description: 'Response status message' })
    status: string;

    @ApiProperty({
        example: [
            'HC_III',
            'HC_IV',
            'Regional_Referral_Hospital',
            'General_Hospital',
            'HC_II',
            'National_Referral_Hospital',
            'Community'
        ],
        description: 'Labels for facility levels'
    })
    labels: string[];

    @ApiProperty({
        example: [44.43, 16.9, 13.68, 11.06, 9.27, 4.57, 0.09],
        description: 'Satisfaction rate percentages by level'
    })
    data: number[];
} 