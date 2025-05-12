declare class ServicePointPercentageDto {
    today: number;
    this_month: number;
    cumulative: number;
}
export declare class ServicePointPercentagesDto {
    status: string;
    data: {
        [key: string]: ServicePointPercentageDto;
    };
}
export {};
