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
exports.TrendsDataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RegionTrendDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Acholi', description: 'Region name' }),
    __metadata("design:type", String)
], RegionTrendDto.prototype, "region", void 0);
class TrendsDataDto {
}
exports.TrendsDataDto = TrendsDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success', description: 'Response status message' }),
    __metadata("design:type", String)
], TrendsDataDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['2024-12', '2025-01', '2025-02', '2025-03', '2025-04', '2025-05'],
        description: 'Months included in the trend data'
    }),
    __metadata("design:type", Array)
], TrendsDataDto.prototype, "months", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [RegionTrendDto],
        description: 'Trend data for each region across months',
        example: [
            {
                region: 'Acholi',
                '2024-12': 84.93,
                '2025-01': 85.86,
                '2025-02': 89.37
            }
        ]
    }),
    __metadata("design:type", Array)
], TrendsDataDto.prototype, "data", void 0);
//# sourceMappingURL=trends-data.dto.js.map