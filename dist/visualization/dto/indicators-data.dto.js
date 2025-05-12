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
exports.IndicatorsDataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class IndicatorScoreDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0, description: 'Score for today' }),
    __metadata("design:type", Number)
], IndicatorScoreDto.prototype, "today", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10, description: 'Score for this month' }),
    __metadata("design:type", Number)
], IndicatorScoreDto.prototype, "this_month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 7, description: 'Cumulative score' }),
    __metadata("design:type", Number)
], IndicatorScoreDto.prototype, "cumulative", void 0);
class IndicatorsDataDto {
}
exports.IndicatorsDataDto = IndicatorsDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success', description: 'Response status message' }),
    __metadata("design:type", String)
], IndicatorsDataDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            "Cleanliness": {
                "today": 0,
                "this_month": 10,
                "cumulative": 7
            },
            "Timeliness": {
                "today": 0,
                "this_month": 16,
                "cumulative": 12
            },
            "Overall Satisfaction": {
                "today": 0,
                "this_month": 0,
                "cumulative": 0
            }
        },
        description: 'Scores for various indicators across different time periods'
    }),
    __metadata("design:type", Object)
], IndicatorsDataDto.prototype, "data", void 0);
//# sourceMappingURL=indicators-data.dto.js.map