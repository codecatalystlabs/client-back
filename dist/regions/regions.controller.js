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
exports.RegionsController = void 0;
const common_1 = require("@nestjs/common");
const regions_service_1 = require("./regions.service");
const swagger_1 = require("@nestjs/swagger");
const regions_response_dto_1 = require("./dto/regions-response.dto");
const districts_response_dto_1 = require("./dto/districts-response.dto");
const facilities_response_dto_1 = require("./dto/facilities-response.dto");
const levels_response_dto_1 = require("./dto/levels-response.dto");
const auth_guard_1 = require("../auth/auth.guard");
let RegionsController = class RegionsController {
    constructor(regionsService) {
        this.regionsService = regionsService;
    }
    async findAll() {
        const regions = await this.regionsService.findAllRegions();
        return {
            message: 'success',
            data: regions
        };
    }
    async findDistricts(region) {
        const districts = await this.regionsService.findDistrictsByRegion(region);
        return {
            message: 'success',
            data: districts
        };
    }
    async findFacilities(district) {
        const facilities = await this.regionsService.findFacilitiesByDistrict(district);
        return {
            message: 'success',
            data: facilities
        };
    }
    async findLevels(facility) {
        const levels = await this.regionsService.findLevelsByFacility(facility);
        return {
            message: 'success',
            data: levels
        };
    }
};
exports.RegionsController = RegionsController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all regions' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns an array of regions',
        type: regions_response_dto_1.RegionsResponseDto
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':region/districts'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all districts in a specific region' }),
    (0, swagger_1.ApiParam)({ name: 'region', description: 'The region name' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns an array of districts in the region',
        type: districts_response_dto_1.DistrictsResponseDto
    }),
    __param(0, (0, common_1.Param)('region')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegionsController.prototype, "findDistricts", null);
__decorate([
    (0, common_1.Get)('districts/:district/facilities'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all facilities in a specific district' }),
    (0, swagger_1.ApiParam)({ name: 'district', description: 'The district name' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns an array of facilities in the district',
        type: facilities_response_dto_1.FacilitiesResponseDto
    }),
    __param(0, (0, common_1.Param)('district')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegionsController.prototype, "findFacilities", null);
__decorate([
    (0, common_1.Get)('facilities/:facility/levels'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all levels for a specific facility' }),
    (0, swagger_1.ApiParam)({ name: 'facility', description: 'The facility name' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns an array of levels for the facility',
        type: levels_response_dto_1.LevelsResponseDto
    }),
    __param(0, (0, common_1.Param)('facility')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RegionsController.prototype, "findLevels", null);
exports.RegionsController = RegionsController = __decorate([
    (0, swagger_1.ApiTags)('regions'),
    (0, common_1.Controller)('regions'),
    __metadata("design:paramtypes", [regions_service_1.RegionsService])
], RegionsController);
//# sourceMappingURL=regions.controller.js.map