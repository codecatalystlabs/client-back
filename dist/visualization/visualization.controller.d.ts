import { VisualizationService } from './visualization.service';
import { SatisfactionByLevelDto } from './dto/satisfaction-by-level.dto';
import { SatisfactionByServicepointDto } from './dto/satisfaction-by-servicepoint.dto';
import { DissatisfactionParetoDto } from './dto/dissatisfaction-pareto.dto';
import { TrendsDataDto } from './dto/trends-data.dto';
import { DashboardDataDto } from './dto/dashboard-data.dto';
import { WordCloudDto } from './dto/word-cloud.dto';
import { DashboardFilterDto } from './dto/dashboard-filter.dto';
import { OverallSatisfactionDto } from './dto/overall-satisfaction.dto';
import { ServicePointPercentagesDto } from './dto/servicepoint-counts.dto';
import { IndicatorsDataDto } from './dto/indicators-data.dto';
import { SatisfactionTrendDto } from './dto/satisfaction-trend.dto';
import { AllSatisfactionDataDto } from './dto/all-satisfaction-data.dto';
export declare class VisualizationController {
    private readonly visualizationService;
    constructor(visualizationService: VisualizationService);
    private applyRoleBasedFilters;
    getSatisfactionByLevel(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<SatisfactionByLevelDto>;
    getSatisfactionByServicepoint(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<SatisfactionByServicepointDto>;
    getDissatisfactionPareto(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<DissatisfactionParetoDto>;
    getBribeByRegion(region?: string, district?: string, facility?: string, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<{
        labels: string[];
        datasets: {
            label: string;
            backgroundColor: string;
            borderColor: string;
            data: number[];
        }[];
    }>;
    getTrendsData(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<TrendsDataDto>;
    getSatisfactionByRegionAndMonth(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<{
        status: string;
        months: string[];
        data: Record<string, any>[];
    }>;
    getDashboardData(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<DashboardDataDto>;
    getSatisfactionTrend(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<SatisfactionTrendDto>;
    getIndicatorsData(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<IndicatorsDataDto>;
    getServicePointPercentages(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<ServicePointPercentagesDto>;
    getOverallSatisfaction(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<OverallSatisfactionDto>;
    getWordCloud(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<WordCloudDto>;
    getAllSatisfactionData(filters: DashboardFilterDto, page?: number, limit?: number, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string): Promise<AllSatisfactionDataDto>;
}
