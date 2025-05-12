import { PrismaService } from '../prisma/prisma.service';
import { SatisfactionRecordDto } from './dto/all-satisfaction-data.dto';
import { DashboardFilterDto } from './dto/dashboard-filter.dto';
export declare class VisualizationService {
    private prisma;
    constructor(prisma: PrismaService);
    getSatisfactionByLevel(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }): Promise<{
        status: string;
        labels: string[];
        data: number[];
    }>;
    getSatisfactionByServicepoint(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }): Promise<{
        status: string;
        labels: string[];
        data: number[];
    }>;
    getDissatisfactionPareto(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }): Promise<{
        status: string;
        total: number;
        data: {
            factor: string;
            count: number;
            percentage: number;
            cumulative_percentage: number;
        }[];
    }>;
    getBribeByRegion(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }): Promise<{
        labels: string[];
        datasets: {
            label: string;
            backgroundColor: string;
            borderColor: string;
            data: number[];
        }[];
    }>;
    getTrendsData(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }): Promise<{
        status: string;
        months: string[];
        data: any[];
    }>;
    getSatisfactionByRegionAndMonth(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }): Promise<{
        status: string;
        months: string[];
        data: Record<string, any>[];
    }>;
    getDashboardData(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }): Promise<{
        status: string;
        today: {
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
        };
        this_month: {
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
        };
        last_month: {
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
        };
        cumulative: {
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
        };
    }>;
    getSatisfactionTrend(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }): Promise<{
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            fill: boolean;
            borderColor: string;
            backgroundColor: string;
            tension: number;
        }[];
    }>;
    getIndicatorsData(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }): Promise<{
        status: string;
        data: {
            Cleanliness: {
                today: number;
                this_month: number;
                cumulative: number;
            };
            Timeliness: {
                today: number;
                this_month: number;
                cumulative: number;
            };
            Privacy: {
                today: number;
                this_month: number;
                cumulative: number;
            };
            Respect: {
                today: number;
                this_month: number;
                cumulative: number;
            };
            "Availability of Medicine": {
                today: number;
                this_month: number;
                cumulative: number;
            };
            "Availability of Services": {
                today: number;
                this_month: number;
                cumulative: number;
            };
            "Access to Services": {
                today: number;
                this_month: number;
                cumulative: number;
            };
            "Needed Time Given": {
                today: number;
                this_month: number;
                cumulative: number;
            };
            "Cost of Services": {
                today: number;
                this_month: number;
                cumulative: number;
            };
            Bribe: {
                today: number;
                this_month: number;
                cumulative: number;
            };
            "Service Against Will": {
                today: number;
                this_month: number;
                cumulative: number;
            };
            "Overall Satisfaction": {
                today: number;
                this_month: number;
                cumulative: number;
            };
        };
    }>;
    getServicePointCounts(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }): Promise<{
        status: string;
        data: Record<string, {
            today: number;
            this_month: number;
            cumulative: number;
        }>;
    }>;
    getOverallSatisfaction(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }): Promise<{
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
            borderColor: string[];
            borderWidth: number;
        }[];
    }>;
    getAllSatisfactionData(filters?: {
        region?: string;
        district?: string;
        facility?: string;
    }, page?: number, limit?: number): Promise<{
        status: string;
        total: number;
        page: number;
        limit: number;
        total_pages: number;
        data: SatisfactionRecordDto[];
    }>;
    getWordCloud(filters: DashboardFilterDto): Promise<{
        status: string;
        total_phrases: number;
        data: Record<string, number>;
    }>;
}
