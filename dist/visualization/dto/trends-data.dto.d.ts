declare class RegionTrendDto {
    region: string;
    [key: string]: string | number;
}
export declare class TrendsDataDto {
    status: string;
    months: string[];
    data: RegionTrendDto[];
}
export {};
