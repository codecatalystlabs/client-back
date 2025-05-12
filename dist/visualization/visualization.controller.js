"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisualizationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const visualization_service_1 = require("./visualization.service");
const satisfaction_by_level_dto_1 = require("./dto/satisfaction-by-level.dto");
const satisfaction_by_servicepoint_dto_1 = require("./dto/satisfaction-by-servicepoint.dto");
const dissatisfaction_pareto_dto_1 = require("./dto/dissatisfaction-pareto.dto");
const bribe_data_dto_1 = require("./dto/bribe-data.dto");
const trends_data_dto_1 = require("./dto/trends-data.dto");
const satisfaction_by_region_month_dto_1 = require("./dto/satisfaction-by-region-month.dto");
const dashboard_data_dto_1 = require("./dto/dashboard-data.dto");
const word_cloud_dto_1 = require("./dto/word-cloud.dto");
const dashboard_filter_dto_1 = require("./dto/dashboard-filter.dto");
const overall_satisfaction_dto_1 = require("./dto/overall-satisfaction.dto");
const servicepoint_counts_dto_1 = require("./dto/servicepoint-counts.dto");
const indicators_data_dto_1 = require("./dto/indicators-data.dto");
const satisfaction_trend_dto_1 = require("./dto/satisfaction-trend.dto");
const all_satisfaction_data_dto_1 = require("./dto/all-satisfaction-data.dto");
let VisualizationController = class VisualizationController {
    constructor(visualizationService) {
        this.visualizationService = visualizationService;
    }
    applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = { ...filters };
        if (role === 'national') {
            return filtersWithRole;
        }
        if (role === 'region' && userRegion) {
            filtersWithRole.region = userRegion;
        }
        else if (role === 'district' && userRegion && userDistrict) {
            filtersWithRole.region = userRegion;
            filtersWithRole.district = userDistrict;
        }
        else if (role === 'facility' && userRegion && userDistrict && userFacility) {
            filtersWithRole.region = userRegion;
            filtersWithRole.district = userDistrict;
            filtersWithRole.facility = userFacility;
        }
        if (role && role !== 'national' && !filtersWithRole.region) {
            throw new common_1.BadRequestException('Region is required for non-national users');
        }
        return filtersWithRole;
    }
    async getSatisfactionByLevel(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getSatisfactionByLevel(filtersWithRole);
    }
    async getSatisfactionByServicepoint(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getSatisfactionByServicepoint(filtersWithRole);
    }
    async getDissatisfactionPareto(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getDissatisfactionPareto(filtersWithRole);
    }
    async getBribeByRegion(region, district, facility, role, userRegion, userDistrict, userFacility) {
        let filters = { region, district, facility };
        if (role === 'national') {
        }
        else if (role === 'region' && userRegion) {
            filters.region = userRegion;
        }
        else if (role === 'district' && userRegion && userDistrict) {
            filters.region = userRegion;
            filters.district = userDistrict;
        }
        else if (role === 'facility' && userRegion && userDistrict && userFacility) {
            filters.region = userRegion;
            filters.district = userDistrict;
            filters.facility = userFacility;
        }
        if (role && role !== 'national' && !filters.region) {
            throw new common_1.BadRequestException('Region is required for non-national users');
        }
        return this.visualizationService.getBribeByRegion(filters);
    }
    async getTrendsData(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getTrendsData(filtersWithRole);
    }
    async getSatisfactionByRegionAndMonth(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getSatisfactionByRegionAndMonth(filtersWithRole);
    }
    async getDashboardData(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getDashboardData(filtersWithRole);
    }
    async getSatisfactionTrend(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getSatisfactionTrend(filtersWithRole);
    }
    async getIndicatorsData(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getIndicatorsData(filtersWithRole);
    }
    async getServicePointPercentages(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getServicePointCounts(filtersWithRole);
    }
    async getOverallSatisfaction(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getOverallSatisfaction(filtersWithRole);
    }
    async getWordCloud(filters, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        return this.visualizationService.getWordCloud(filtersWithRole);
    }
    async getAllSatisfactionData(filters, page, limit, role, userRegion, userDistrict, userFacility) {
        const filtersWithRole = this.applyRoleBasedFilters(filters, role, userRegion, userDistrict, userFacility);
        const pageNum = page ? parseInt(page.toString()) : 1;
        const limitNum = limit ? parseInt(limit.toString()) : 100;
        return this.visualizationService.getAllSatisfactionData(filtersWithRole, pageNum, limitNum);
    }
};
exports.VisualizationController = VisualizationController;
__decorate([
    (0, common_1.Get)('satisfaction-by-level'),
    (0, swagger_1.ApiOperation)({ summary: 'Get satisfaction rate by facility level' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns satisfaction rate data by facility level for visualization',
        type: satisfaction_by_level_dto_1.SatisfactionByLevelDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('userRegion')),
    __param(3, (0, common_1.Query)('userDistrict')),
    __param(4, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getSatisfactionByLevel", null);
__decorate([
    (0, common_1.Get)('satisfaction-by-servicepoint'),
    (0, swagger_1.ApiOperation)({ summary: 'Get satisfaction rate by service point' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns satisfaction rate data by service point for visualization',
        type: satisfaction_by_servicepoint_dto_1.SatisfactionByServicepointDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('userRegion')),
    __param(3, (0, common_1.Query)('userDistrict')),
    __param(4, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getSatisfactionByServicepoint", null);
__decorate([
    (0, common_1.Get)('dissatisfaction-pareto'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Pareto analysis of dissatisfaction factors' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns Pareto analysis of dissatisfaction factors for visualization',
        type: dissatisfaction_pareto_dto_1.DissatisfactionParetoDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('userRegion')),
    __param(3, (0, common_1.Query)('userDistrict')),
    __param(4, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getDissatisfactionPareto", null);
__decorate([
    (0, common_1.Get)('bribe-by-region'),
    (0, swagger_1.ApiOperation)({ summary: 'Get bribe data by region' }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully retrieved bribe data by region',
        type: bribe_data_dto_1.BribeDataDto,
    }),
    __param(0, (0, common_1.Query)('region')),
    __param(1, (0, common_1.Query)('district')),
    __param(2, (0, common_1.Query)('facility')),
    __param(3, (0, common_1.Query)('role')),
    __param(4, (0, common_1.Query)('userRegion')),
    __param(5, (0, common_1.Query)('userDistrict')),
    __param(6, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getBribeByRegion", null);
__decorate([
    (0, common_1.Get)('trends_graph'),
    (0, swagger_1.ApiOperation)({ summary: 'Get satisfaction trends data by region over time' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns satisfaction trends data by region over time for visualization',
        type: trends_data_dto_1.TrendsDataDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('userRegion')),
    __param(3, (0, common_1.Query)('userDistrict')),
    __param(4, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getTrendsData", null);
__decorate([
    (0, common_1.Get)('trends_table'),
    (0, swagger_1.ApiOperation)({ summary: 'Get satisfaction data by region and month for the last 11 months' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns satisfaction data grouped by region and month',
        type: satisfaction_by_region_month_dto_1.SatisfactionByRegionMonthDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('userRegion')),
    __param(3, (0, common_1.Query)('userDistrict')),
    __param(4, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getSatisfactionByRegionAndMonth", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiOperation)({ summary: 'Get dashboard data including today, this month, last month, and cumulative metrics' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns dashboard metrics for different time periods',
        type: dashboard_data_dto_1.DashboardDataDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('userRegion')),
    __param(3, (0, common_1.Query)('userDistrict')),
    __param(4, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getDashboardData", null);
__decorate([
    (0, common_1.Get)('satisfaction-trend'),
    (0, swagger_1.ApiOperation)({ summary: 'Get monthly satisfaction trend data' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns monthly satisfaction rates for the last 12 months',
        type: satisfaction_trend_dto_1.SatisfactionTrendDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('userRegion')),
    __param(3, (0, common_1.Query)('userDistrict')),
    __param(4, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getSatisfactionTrend", null);
__decorate([
    (0, common_1.Get)('indicators'),
    (0, swagger_1.ApiOperation)({ summary: 'Get indicators data for today, this month, and cumulative periods' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns scores for various indicators across different time periods',
        type: indicators_data_dto_1.IndicatorsDataDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('userRegion')),
    __param(3, (0, common_1.Query)('userDistrict')),
    __param(4, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getIndicatorsData", null);
__decorate([
    (0, common_1.Get)('servicepoint-percentages'),
    (0, swagger_1.ApiOperation)({ summary: 'Get response percentages per service point for today, this month, and cumulative periods' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns response percentages for various service points across different time periods',
        type: servicepoint_counts_dto_1.ServicePointPercentagesDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('userRegion')),
    __param(3, (0, common_1.Query)('userDistrict')),
    __param(4, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getServicePointPercentages", null);
__decorate([
    (0, common_1.Get)('overall-satisfaction'),
    (0, swagger_1.ApiOperation)({ summary: 'Get overall satisfaction data' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns counts of satisfied and dissatisfied responses for pie/doughnut chart',
        type: overall_satisfaction_dto_1.OverallSatisfactionDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('userRegion')),
    __param(3, (0, common_1.Query)('userDistrict')),
    __param(4, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getOverallSatisfaction", null);
__decorate([
    (0, common_1.Get)('word-cloud'),
    (0, swagger_1.ApiOperation)({ summary: 'Get word cloud data from comments' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns word cloud data with phrase frequencies',
        type: word_cloud_dto_1.WordCloudDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('userRegion')),
    __param(3, (0, common_1.Query)('userDistrict')),
    __param(4, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getWordCloud", null);
__decorate([
    (0, common_1.Get)('all-satisfaction-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all satisfaction data records with pagination' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns all fields from the satisfaction schema with pagination',
        type: all_satisfaction_data_dto_1.AllSatisfactionDataDto
    }),
    (0, swagger_1.ApiQuery)({ name: 'region', required: false, description: 'Filter by region (auto-applied based on user role)' }),
    (0, swagger_1.ApiQuery)({ name: 'district', required: false, description: 'Filter by district' }),
    (0, swagger_1.ApiQuery)({ name: 'facility', required: false, description: 'Filter by facility' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, description: 'Page number (default: 1)', type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Records per page (default: 100)', type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, description: 'User role (national, region, district, facility)' }),
    (0, swagger_1.ApiQuery)({ name: 'userRegion', required: false, description: 'User\'s assigned region' }),
    (0, swagger_1.ApiQuery)({ name: 'userDistrict', required: false, description: 'User\'s assigned district' }),
    (0, swagger_1.ApiQuery)({ name: 'userFacility', required: false, description: 'User\'s assigned facility' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('role')),
    __param(4, (0, common_1.Query)('userRegion')),
    __param(5, (0, common_1.Query)('userDistrict')),
    __param(6, (0, common_1.Query)('userFacility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dashboard_filter_dto_1.DashboardFilterDto, Number, Number, String, String, String, String]),
    __metadata("design:returntype", Promise)
], VisualizationController.prototype, "getAllSatisfactionData", null);
exports.VisualizationController = VisualizationController = __decorate([
    (0, swagger_1.ApiTags)('visualization'),
    (0, common_1.Controller)('visualization'),
    __metadata("design:paramtypes", [visualization_service_1.VisualizationService])
], VisualizationController);
//# sourceMappingURL=visualization.controller.js.map