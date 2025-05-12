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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardDataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TimeframeData {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of clients' }),
    __metadata("design:type", Number)
], TimeframeData.prototype, "total_clients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of satisfied clients' }),
    __metadata("design:type", Number)
], TimeframeData.prototype, "satisfied_clients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overall satisfaction percentage' }),
    __metadata("design:type", Number)
], TimeframeData.prototype, "overall_satisfaction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of male entries' }),
    __metadata("design:type", Number)
], TimeframeData.prototype, "male_entries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of female entries' }),
    __metadata("design:type", Number)
], TimeframeData.prototype, "female_entries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of facilities asking for bribes' }),
    __metadata("design:type", Number)
], TimeframeData.prototype, "facilities_asking_bribes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average cost of services' }),
    __metadata("design:type", Number)
], TimeframeData.prototype, "average_cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Medicine availability percentage' }),
    __metadata("design:type", Number)
], TimeframeData.prototype, "medicine_availability", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of timely service encounters' }),
    __metadata("design:type", Number)
], TimeframeData.prototype, "timely_encounters", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of entries' }),
    __metadata("design:type", Number)
], TimeframeData.prototype, "entries_today", void 0);
class DashboardDataDto {
}
exports.DashboardDataDto = DashboardDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the response' }),
    __metadata("design:type", String)
], DashboardDataDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data for today', type: TimeframeData }),
    __metadata("design:type", TimeframeData)
], DashboardDataDto.prototype, "today", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data for this month', type: TimeframeData }),
    __metadata("design:type", TimeframeData)
], DashboardDataDto.prototype, "this_month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Data for last month', type: TimeframeData }),
    __metadata("design:type", TimeframeData)
], DashboardDataDto.prototype, "last_month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cumulative data', type: TimeframeData }),
    __metadata("design:type", TimeframeData)
], DashboardDataDto.prototype, "cumulative", void 0);
//# sourceMappingURL=dashboard-data.dto.js.map