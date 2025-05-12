declare class TimeframeData {
    total_clients: number;
    satisfied_clients: number;
    overall_satisfaction: number;
    male_entries: number;
    female_entries: number;
    facilities_asking_bribes: number;
    average_cost: number;
    medicine_availability: number;
    timely_encounters: number;
    entries_today: number;
}
export declare class DashboardDataDto {
    status: string;
    today: TimeframeData;
    this_month: TimeframeData;
    last_month: TimeframeData;
    cumulative: TimeframeData;
}
export {};
