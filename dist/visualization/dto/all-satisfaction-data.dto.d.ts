export declare class SatisfactionRecordDto {
    meta_instance_id: string;
    system_submission_date?: string;
    region?: string;
    district?: string;
    facility?: string;
    hlevel?: string;
    ownership?: string;
    reporting_period?: Date;
    demo_age?: number;
    demo_gender?: string;
    servicepoint?: string;
    servicepoint_others?: string;
    cleanliness?: string;
    timeliness_of_services?: string;
    privacy?: string;
    respect?: string;
    availability_of_medicines?: string;
    availability_of_services?: string;
    g_access_to_services?: string;
    needed_time_given?: string;
    cost_of_services?: string;
    bribe?: string;
    service_against_will?: string;
    satifisaction?: string;
    comments?: string;
    system_submission_datession_date?: Date;
}
export declare class AllSatisfactionDataDto {
    status: string;
    total: number;
    page: number;
    limit: number;
    total_pages: number;
    data: SatisfactionRecordDto[];
}
