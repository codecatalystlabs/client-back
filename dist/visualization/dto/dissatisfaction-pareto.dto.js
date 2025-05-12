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
exports.DissatisfactionParetoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DissatisfactionFactorDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cost of services', description: 'Name of the dissatisfaction factor' }),
    __metadata("design:type", String)
], DissatisfactionFactorDto.prototype, "factor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8855, description: 'Count of responses citing this factor' }),
    __metadata("design:type", Number)
], DissatisfactionFactorDto.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 15.78, description: 'Percentage of total dissatisfaction attributed to this factor' }),
    __metadata("design:type", Number)
], DissatisfactionFactorDto.prototype, "percentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 15.78, description: 'Cumulative percentage up to this factor' }),
    __metadata("design:type", Number)
], DissatisfactionFactorDto.prototype, "cumulative_percentage", void 0);
class DissatisfactionParetoDto {
}
exports.DissatisfactionParetoDto = DissatisfactionParetoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success', description: 'Response status message' }),
    __metadata("design:type", String)
], DissatisfactionParetoDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 56121, description: 'Total count of dissatisfaction responses' }),
    __metadata("design:type", Number)
], DissatisfactionParetoDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [DissatisfactionFactorDto],
        description: 'Dissatisfaction factors sorted by frequency'
    }),
    __metadata("design:type", Array)
], DissatisfactionParetoDto.prototype, "data", void 0);
//# sourceMappingURL=dissatisfaction-pareto.dto.js.map