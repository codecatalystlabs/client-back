import { ApiProperty } from '@nestjs/swagger';

class TimeframeData {
    @ApiProperty({ description: 'Total number of clients' })
    total_clients: number;

    @ApiProperty({ description: 'Number of satisfied clients' })
    satisfied_clients: number;

    @ApiProperty({ description: 'Overall satisfaction percentage' })
    overall_satisfaction: number;

    @ApiProperty({ description: 'Number of male entries' })
    male_entries: number;

    @ApiProperty({ description: 'Number of female entries' })
    female_entries: number;

    @ApiProperty({ description: 'Number of facilities asking for bribes' })
    facilities_asking_bribes: number;

    @ApiProperty({ description: 'Average cost of services' })
    average_cost: number;

    @ApiProperty({ description: 'Medicine availability percentage' })
    medicine_availability: number;

    @ApiProperty({ description: 'Number of timely service encounters' })
    timely_encounters: number;

    @ApiProperty({ description: 'Total number of entries' })
    entries_today: number;
}

export class DashboardDataDto {
    @ApiProperty({ description: 'Status of the response' })
    status: string;

    @ApiProperty({ description: 'Data for today', type: TimeframeData })
    today: TimeframeData;

    @ApiProperty({ description: 'Data for this month', type: TimeframeData })
    this_month: TimeframeData;

    @ApiProperty({ description: 'Data for last month', type: TimeframeData })
    last_month: TimeframeData;

    @ApiProperty({ description: 'Cumulative data', type: TimeframeData })
    cumulative: TimeframeData;
} 