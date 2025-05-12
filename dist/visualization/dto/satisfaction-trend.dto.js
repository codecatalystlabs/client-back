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
exports.SatisfactionTrendDto = exports.DatasetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DatasetDto {
}
exports.DatasetDto = DatasetDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Satisfaction Rate (%)', description: 'Label for the dataset' }),
    __metadata("design:type", String)
], DatasetDto.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [100, 96.24, 90.31], description: 'Monthly satisfaction rate percentages' }),
    __metadata("design:type", Array)
], DatasetDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Whether to fill the area under the line' }),
    __metadata("design:type", Boolean)
], DatasetDto.prototype, "fill", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'rgba(75, 192, 192, 1)', description: 'Border color for the line' }),
    __metadata("design:type", String)
], DatasetDto.prototype, "borderColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'rgba(75, 192, 192, 0.2)', description: 'Background color for the chart' }),
    __metadata("design:type", String)
], DatasetDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0.1, description: 'Line tension value for the chart' }),
    __metadata("design:type", Number)
], DatasetDto.prototype, "tension", void 0);
class SatisfactionTrendDto {
}
exports.SatisfactionTrendDto = SatisfactionTrendDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['2024-05', '2024-06', '2024-07', '2024-08', '2024-09', '2024-10', '2024-11', '2024-12'],
        description: 'Month labels for the trend data'
    }),
    __metadata("design:type", Array)
], SatisfactionTrendDto.prototype, "labels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [DatasetDto],
        description: 'Datasets for the satisfaction trend chart'
    }),
    __metadata("design:type", Array)
], SatisfactionTrendDto.prototype, "datasets", void 0);
//# sourceMappingURL=satisfaction-trend.dto.js.map