declare class DissatisfactionFactorDto {
    factor: string;
    count: number;
    percentage: number;
    cumulative_percentage: number;
}
export declare class DissatisfactionParetoDto {
    status: string;
    total: number;
    data: DissatisfactionFactorDto[];
}
export {};
