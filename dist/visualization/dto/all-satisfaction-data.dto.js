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
exports.AllSatisfactionDataDto = exports.SatisfactionRecordDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SatisfactionRecordDto {
}
exports.SatisfactionRecordDto = SatisfactionRecordDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique satisfaction record ID' }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "meta_instance_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'System submission date', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "system_submission_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Region', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'District', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "district", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Facility', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "facility", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Healthcare level', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "hlevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ownership information', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "ownership", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reporting period date', required: false }),
    __metadata("design:type", Date)
], SatisfactionRecordDto.prototype, "reporting_period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Age of respondent', required: false }),
    __metadata("design:type", Number)
], SatisfactionRecordDto.prototype, "demo_age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gender of respondent', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "demo_gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Service point', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "servicepoint", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Other service points', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "servicepoint_others", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cleanliness rating (1-5)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "cleanliness", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Timeliness of services rating (1-5)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "timeliness_of_services", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Privacy rating (1-5)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "privacy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Respect rating (1-5)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "respect", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Availability of medicines rating (1-5)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "availability_of_medicines", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Availability of services rating (1-5)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "availability_of_services", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Access to services rating (1-5)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "g_access_to_services", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether needed time was given rating (1-5)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "needed_time_given", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cost of services rating (1-5)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "cost_of_services", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether bribe was requested (Yes/No)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "bribe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether service was provided against will (Yes/No)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "service_against_will", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Overall satisfaction (Yes/No)', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "satifisaction", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional comments', required: false }),
    __metadata("design:type", String)
], SatisfactionRecordDto.prototype, "comments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'System submission date (alternative field)', required: false }),
    __metadata("design:type", Date)
], SatisfactionRecordDto.prototype, "system_submission_datession_date", void 0);
class AllSatisfactionDataDto {
}
exports.AllSatisfactionDataDto = AllSatisfactionDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response status', example: 'success' }),
    __metadata("design:type", String)
], AllSatisfactionDataDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of records matching the query' }),
    __metadata("design:type", Number)
], AllSatisfactionDataDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], AllSatisfactionDataDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of records per page' }),
    __metadata("design:type", Number)
], AllSatisfactionDataDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of pages' }),
    __metadata("design:type", Number)
], AllSatisfactionDataDto.prototype, "total_pages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Satisfaction data records', type: [SatisfactionRecordDto] }),
    __metadata("design:type", Array)
], AllSatisfactionDataDto.prototype, "data", void 0);
//# sourceMappingURL=all-satisfaction-data.dto.js.map