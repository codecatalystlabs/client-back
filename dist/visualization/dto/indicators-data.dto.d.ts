declare class IndicatorScoreDto {
    today: number;
    this_month: number;
    cumulative: number;
}
export declare class IndicatorsDataDto {
    status: string;
    data: {
        [key: string]: IndicatorScoreDto;
    };
}
export {};
