import { ApiProperty } from '@nestjs/swagger';

// DTO for individual satisfaction record
export class SatisfactionRecordDto {
    @ApiProperty({ description: 'Unique satisfaction record ID' })
    meta_instance_id: string;

    @ApiProperty({ description: 'System submission date', required: false })
    system_submission_date?: string;

    @ApiProperty({ description: 'Region', required: false })
    region?: string;

    @ApiProperty({ description: 'District', required: false })
    district?: string;

    @ApiProperty({ description: 'Facility', required: false })
    facility?: string;

    @ApiProperty({ description: 'Healthcare level', required: false })
    hlevel?: string;

    @ApiProperty({ description: 'Ownership information', required: false })
    ownership?: string;

    @ApiProperty({ description: 'Reporting period date', required: false })
    reporting_period?: Date;

    @ApiProperty({ description: 'Age of respondent', required: false })
    demo_age?: number;

    @ApiProperty({ description: 'Gender of respondent', required: false })
    demo_gender?: string;

    @ApiProperty({ description: 'Service point', required: false })
    servicepoint?: string;

    @ApiProperty({ description: 'Other service points', required: false })
    servicepoint_others?: string;

    @ApiProperty({ description: 'Cleanliness rating (1-5)', required: false })
    cleanliness?: string;

    @ApiProperty({ description: 'Timeliness of services rating (1-5)', required: false })
    timeliness_of_services?: string;

    @ApiProperty({ description: 'Privacy rating (1-5)', required: false })
    privacy?: string;

    @ApiProperty({ description: 'Respect rating (1-5)', required: false })
    respect?: string;

    @ApiProperty({ description: 'Availability of medicines rating (1-5)', required: false })
    availability_of_medicines?: string;

    @ApiProperty({ description: 'Availability of services rating (1-5)', required: false })
    availability_of_services?: string;

    @ApiProperty({ description: 'Access to services rating (1-5)', required: false })
    g_access_to_services?: string;

    @ApiProperty({ description: 'Whether needed time was given rating (1-5)', required: false })
    needed_time_given?: string;

    @ApiProperty({ description: 'Cost of services rating (1-5)', required: false })
    cost_of_services?: string;

    @ApiProperty({ description: 'Whether bribe was requested (Yes/No)', required: false })
    bribe?: string;

    @ApiProperty({ description: 'Whether service was provided against will (Yes/No)', required: false })
    service_against_will?: string;

    @ApiProperty({ description: 'Overall satisfaction (Yes/No)', required: false })
    satifisaction?: string;

    @ApiProperty({ description: 'Additional comments', required: false })
    comments?: string;

    @ApiProperty({ description: 'System submission date (alternative field)', required: false })
    system_submission_datession_date?: Date;
}

// Main DTO for paginated list of satisfaction data
export class AllSatisfactionDataDto {
    @ApiProperty({ description: 'Response status', example: 'success' })
    status: string;

    @ApiProperty({ description: 'Total number of records matching the query' })
    total: number;

    @ApiProperty({ description: 'Current page number' })
    page: number;

    @ApiProperty({ description: 'Number of records per page' })
    limit: number;

    @ApiProperty({ description: 'Total number of pages' })
    total_pages: number;

    @ApiProperty({ description: 'Satisfaction data records', type: [SatisfactionRecordDto] })
    data: SatisfactionRecordDto[];
} 