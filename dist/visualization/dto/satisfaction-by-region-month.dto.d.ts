export declare class SatisfactionByRegionMonthDto {
    status: string;
    data: Array<{
        region: string;
        month: string;
        total_clients: number;
        satisfied_clients: number;
    }>;
}
