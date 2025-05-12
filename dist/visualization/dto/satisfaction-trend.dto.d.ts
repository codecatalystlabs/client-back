export declare class DatasetDto {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    backgroundColor: string;
    tension: number;
}
export declare class SatisfactionTrendDto {
    labels: string[];
    datasets: DatasetDto[];
}
