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
exports.ServicePointPercentagesDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ServicePointPercentageDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10.5, description: 'Percentage of responses for today' }),
    __metadata("design:type", Number)
], ServicePointPercentageDto.prototype, "today", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 15.3, description: 'Percentage of responses for this month' }),
    __metadata("design:type", Number)
], ServicePointPercentageDto.prototype, "this_month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 18.7, description: 'Percentage of cumulative responses' }),
    __metadata("design:type", Number)
], ServicePointPercentageDto.prototype, "cumulative", void 0);
class ServicePointPercentagesDto {
}
exports.ServicePointPercentagesDto = ServicePointPercentagesDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success', description: 'Response status message' }),
    __metadata("design:type", String)
], ServicePointPercentagesDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            "OPD": {
                "today": 25.5,
                "this_month": 35.2,
                "cumulative": 40.0
            },
            "ART_clinic": {
                "today": 15.8,
                "this_month": 12.3,
                "cumulative": 10.5
            },
            "Antenatal": {
                "today": 10.2,
                "this_month": 8.7,
                "cumulative": 7.9
            }
        },
        description: 'Response percentages for various service points across different time periods'
    }),
    __metadata("design:type", Object)
], ServicePointPercentagesDto.prototype, "data", void 0);
//# sourceMappingURL=servicepoint-counts.dto.js.map