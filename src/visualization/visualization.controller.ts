import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';
import { VisualizationService } from './visualization.service';
import { SatisfactionByLevelDto } from './dto/satisfaction-by-level.dto';
import { SatisfactionByServicepointDto } from './dto/satisfaction-by-servicepoint.dto';
import { DissatisfactionParetoDto } from './dto/dissatisfaction-pareto.dto';
import { BribeDataDto } from './dto/bribe-data.dto';
import { TrendsDataDto } from './dto/trends-data.dto';
import { SatisfactionByRegionMonthDto } from './dto/satisfaction-by-region-month.dto';
import { DashboardDataDto } from './dto/dashboard-data.dto';
import { WordCloudDto } from './dto/word-cloud.dto';
import { DashboardFilterDto } from './dto/dashboard-filter.dto';
import { OverallSatisfactionDto } from './dto/overall-satisfaction.dto';
import { ServicePointPercentagesDto } from './dto/servicepoint-counts.dto';
import { IndicatorsDataDto } from './dto/indicators-data.dto';
import { SatisfactionTrendDto } from './dto/satisfaction-trend.dto';
import { AllSatisfactionDataDto } from './dto/all-satisfaction-data.dto';

@ApiTags('visualization')
@Controller('visualization')
export class VisualizationController {
    constructor(private readonly visualizationService: VisualizationService) { }

    /**
     * Helper method to apply user role-based filters
     * National users can see all data, others are restricted to their region/district/facility
     */
    private applyRoleBasedFilters(filters: DashboardFilterDto, role?: string, userRegion?: string, userDistrict?: string, userFacility?: string) {
        // Create a copy of the filters to avoid modifying the original
        const filtersWithRole = { ...filters };

        // For national role, no additional filters needed - they can see all data
        if (role === 'national') {
            return filtersWithRole;
        }

        // For non-national roles, apply appropriate filters based on user's assigned values
        if (role === 'region' && userRegion) {
            filtersWithRole.region = userRegion;
        } else if (role === 'district' && userRegion && userDistrict) {
            filtersWithRole.region = userRegion;
            filtersWithRole.district = userDistrict;
        } else if (role === 'facility' && userRegion && userDistrict && userFacility) {
            filtersWithRole.region = userRegion;
            filtersWithRole.district = userDistrict;
            filtersWithRole.facility = userFacility;
        }

        // If non-national role doesn't have necessary region info, throw error
        if (role && role !== 'national' && !filtersWithRole.region) {
            throw new BadRequestException('Region is required for non-national users');
        }

        return filtersWithRole;
    }

    @Get('satisfaction-by-level')
    @ApiOperation({ summary: 'Get satisfaction rate by facility level' })
    @ApiResponse({
        status: 200,
        description: 'Returns satisfaction rate data by facility level for visualization',
        type: SatisfactionByLevelDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getSatisfactionByLevel(
        @Query() filters: DashboardFilterDto,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ): Promise<SatisfactionByLevelDto> {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getSatisfactionByLevel(filtersWithRole);
    }

    @Get('satisfaction-by-servicepoint')
    @ApiOperation({ summary: 'Get satisfaction rate by service point' })
    @ApiResponse({
        status: 200,
        description: 'Returns satisfaction rate data by service point for visualization',
        type: SatisfactionByServicepointDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getSatisfactionByServicepoint(
        @Query() filters: DashboardFilterDto,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ): Promise<SatisfactionByServicepointDto> {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getSatisfactionByServicepoint(filtersWithRole);
    }

    @Get('dissatisfaction-pareto')
    @ApiOperation({ summary: 'Get Pareto analysis of dissatisfaction factors' })
    @ApiResponse({
        status: 200,
        description: 'Returns Pareto analysis of dissatisfaction factors for visualization',
        type: DissatisfactionParetoDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getDissatisfactionPareto(
        @Query() filters: DashboardFilterDto,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ): Promise<DissatisfactionParetoDto> {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getDissatisfactionPareto(filtersWithRole);
    }

    @Get('bribe-by-region')
    @ApiOperation({ summary: 'Get bribe data by region' })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    @ApiResponse({
        status: 200,
        description: 'Successfully retrieved bribe data by region',
        type: BribeDataDto,
    })
    async getBribeByRegion(
        @Query('region') region?: string,
        @Query('district') district?: string,
        @Query('facility') facility?: string,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ) {
        let filters = { region, district, facility };

        // Apply role-based filters for this endpoint
        if (role === 'national') {
            // National users see all data
        } else if (role === 'region' && userRegion) {
            filters.region = userRegion;
        } else if (role === 'district' && userRegion && userDistrict) {
            filters.region = userRegion;
            filters.district = userDistrict;
        } else if (role === 'facility' && userRegion && userDistrict && userFacility) {
            filters.region = userRegion;
            filters.district = userDistrict;
            filters.facility = userFacility;
        }

        // Non-national users must have region
        if (role && role !== 'national' && !filters.region) {
            throw new BadRequestException('Region is required for non-national users');
        }

        return this.visualizationService.getBribeByRegion(filters);
    }

    @Get('trends_graph')
    @ApiOperation({ summary: 'Get satisfaction trends data by region over time' })
    @ApiResponse({
        status: 200,
        description: 'Returns satisfaction trends data by region over time for visualization',
        type: TrendsDataDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getTrendsData(
        @Query() filters: DashboardFilterDto,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ): Promise<TrendsDataDto> {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getTrendsData(filtersWithRole);
    }

    @Get('trends_table')
    @ApiOperation({ summary: 'Get satisfaction data by region and month for the last 11 months' })
    @ApiResponse({
        status: 200,
        description: 'Returns satisfaction data grouped by region and month',
        type: SatisfactionByRegionMonthDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getSatisfactionByRegionAndMonth(
        @Query() filters: DashboardFilterDto,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getSatisfactionByRegionAndMonth(filtersWithRole);
    }

    @Get('dashboard')
    @ApiOperation({ summary: 'Get dashboard data including today, this month, last month, and cumulative metrics' })
    @ApiResponse({
        status: 200,
        description: 'Returns dashboard metrics for different time periods',
        type: DashboardDataDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getDashboardData(
        @Query() filters: DashboardFilterDto,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ): Promise<DashboardDataDto> {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getDashboardData(filtersWithRole);
    }

    @Get('satisfaction-trend')
    @ApiOperation({ summary: 'Get monthly satisfaction trend data' })
    @ApiResponse({
        status: 200,
        description: 'Returns monthly satisfaction rates for the last 12 months',
        type: SatisfactionTrendDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getSatisfactionTrend(
        @Query() filters: DashboardFilterDto,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ): Promise<SatisfactionTrendDto> {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getSatisfactionTrend(filtersWithRole);
    }

    @Get('indicators')
    @ApiOperation({ summary: 'Get indicators data for today, this month, and cumulative periods' })
    @ApiResponse({
        status: 200,
        description: 'Returns scores for various indicators across different time periods',
        type: IndicatorsDataDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getIndicatorsData(
        @Query() filters: DashboardFilterDto,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ): Promise<IndicatorsDataDto> {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getIndicatorsData(filtersWithRole);
    }

    @Get('servicepoint-percentages')
    @ApiOperation({ summary: 'Get response percentages per service point for today, this month, and cumulative periods' })
    @ApiResponse({
        status: 200,
        description: 'Returns response percentages for various service points across different time periods',
        type: ServicePointPercentagesDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getServicePointPercentages(
        @Query() filters: DashboardFilterDto,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ): Promise<ServicePointPercentagesDto> {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getServicePointCounts(filtersWithRole);
    }

    @Get('overall-satisfaction')
    @ApiOperation({ summary: 'Get overall satisfaction data' })
    @ApiResponse({
        status: 200,
        description: 'Returns counts of satisfied and dissatisfied responses for pie/doughnut chart',
        type: OverallSatisfactionDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getOverallSatisfaction(
        @Query() filters: DashboardFilterDto,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ): Promise<OverallSatisfactionDto> {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getOverallSatisfaction(filtersWithRole);
    }

    @Get('word-cloud')
    @ApiOperation({ summary: 'Get word cloud data from comments' })
    @ApiResponse({
        status: 200,
        description: 'Returns word cloud data with phrase frequencies',
        type: WordCloudDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getWordCloud(
        @Query() filters: DashboardFilterDto,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ): Promise<WordCloudDto> {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getWordCloud(filtersWithRole);
    }

    @Get('all-satisfaction-data')
    @ApiOperation({ summary: 'Get all satisfaction data records with pagination' })
    @ApiResponse({
        status: 200,
        description: 'Returns all fields from the satisfaction schema with pagination',
        type: AllSatisfactionDataDto
    })
    @ApiQuery({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' })
    @ApiQuery({ name: 'district', required: false, description: 'Filter by district' })
    @ApiQuery({ name: 'facility', required: false, description: 'Filter by facility' })
    @ApiQuery({ name: 'page', required: false, description: 'Page number (default: 1)', type: Number })
    @ApiQuery({ name: 'limit', required: false, description: 'Records per page (default: 100)', type: Number })
    @ApiQuery({ name: 'role', required: false, description: 'User role (national, region, district, facility)' })
    @ApiQuery({ name: 'userRegion', required: false, description: 'User\'s assigned region' })
    @ApiQuery({ name: 'userDistrict', required: false, description: 'User\'s assigned district' })
    @ApiQuery({ name: 'userFacility', required: false, description: 'User\'s assigned facility' })
    async getAllSatisfactionData(
        @Query() filters: DashboardFilterDto,
        @Query('page') page?: number,
        @Query('limit') limit?: number,
        @Query('role') role?: string,
        @Query('userRegion') userRegion?: string,
        @Query('userDistrict') userDistrict?: string,
        @Query('userFacility') userFacility?: string
    ): Promise<AllSatisfactionDataDto> {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);

        // Default page to 1 and limit to 100 if not provided
        const pageNum = page ? parseInt(page.toString()) : 1;
        const limitNum = limit ? parseInt(limit.toString()) : 100;

        return this.visualizationService.getAllSatisfactionData(filtersWithRole, pageNum, limitNum);
    }
} 