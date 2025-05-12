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
exports.OverallSatisfactionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SatisfactionDatasetDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Overall Satisfaction', description: 'Label for the dataset' }),
    __metadata("design:type", String)
], SatisfactionDatasetDto.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [67601, 5704], description: 'Number of satisfied and dissatisfied responses' }),
    __metadata("design:type", Array)
], SatisfactionDatasetDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        description: 'Background colors for satisfied and dissatisfied segments'
    }),
    __metadata("design:type", Array)
], SatisfactionDatasetDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        description: 'Border colors for satisfied and dissatisfied segments'
    }),
    __metadata("design:type", Array)
], SatisfactionDatasetDto.prototype, "borderColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Border width for chart elements' }),
    __metadata("design:type", Number)
], SatisfactionDatasetDto.prototype, "borderWidth", void 0);
class OverallSatisfactionDto {
}
exports.OverallSatisfactionDto = OverallSatisfactionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Satisfied', 'Dissatisfied'],
        description: 'Labels for the satisfaction categories'
    }),
    __metadata("design:type", Array)
], OverallSatisfactionDto.prototype, "labels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [SatisfactionDatasetDto],
        description: 'Dataset for the overall satisfaction chart'
    }),
    __metadata("design:type", Array)
], OverallSatisfactionDto.prototype, "datasets", void 0);
//# sourceMappingURL=overall-satisfaction.dto.js.map