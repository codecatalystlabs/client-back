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
exports.SatisfactionByRegionMonthDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SatisfactionByRegionMonthDto {
}
exports.SatisfactionByRegionMonthDto = SatisfactionByRegionMonthDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the response' }),
    __metadata("design:type", String)
], SatisfactionByRegionMonthDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of satisfaction data by region and month',
        type: 'array',
        items: {
            type: 'object',
            properties: {
                region: { type: 'string', description: 'Region name' },
                month: { type: 'string', description: 'Month in YYYY-MM format' },
                total_clients: { type: 'number', description: 'Total number of clients surveyed' },
                satisfied_clients: { type: 'number', description: 'Number of satisfied clients' }
            }
        }
    }),
    __metadata("design:type", Array)
], SatisfactionByRegionMonthDto.prototype, "data", void 0);
//# sourceMappingURL=satisfaction-by-region-month.dto.js.map