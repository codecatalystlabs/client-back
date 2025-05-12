declare class SatisfactionDatasetDto {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
}
export declare class OverallSatisfactionDto {
    labels: string[];
    datasets: SatisfactionDatasetDto[];
}
export {};
