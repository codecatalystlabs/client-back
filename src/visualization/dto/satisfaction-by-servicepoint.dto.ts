import { ApiProperty } from '@nestjs/swagger';

export class SatisfactionByServicepointDto {
    @ApiProperty({ example: 'success', description: 'Response status message' })
    status: string;

    @ApiProperty({
        example: [
            '1_OPD',
            '7_ART_clinic',
            '4_Antenatal',
            '3_Maternity',
            '9_Other',
            '5_EPI_YCC_Postnatal',
            '2_Medical_ward',
            '6_Surgical_ward',
            '8_Community_Services'
        ],
        description: 'Labels for service points'
    })
    labels: string[];

    @ApiProperty({
        example: [
            35.08,
            20.76,
            10.63,
            9.35,
            8.85,
            5.91,
            5.86,
            2.04,
            1.53
        ],
        description: 'Satisfaction rate percentages by service point'
    })
    data: number[];
} 