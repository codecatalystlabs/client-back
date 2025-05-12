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
exports.BribeDataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class DatasetDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Clients Surveyed', description: 'Label for the dataset' }),
    __metadata("design:type", String)
], DatasetDto.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'rgba(78, 115, 223, 0.5)', description: 'Background color for chart display' }),
    __metadata("design:type", String)
], DatasetDto.prototype, "backgroundColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'rgba(78, 115, 223, 1)', description: 'Border color for chart display' }),
    __metadata("design:type", String)
], DatasetDto.prototype, "borderColor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [2437, 9356, 6453], description: 'Values for each region' }),
    __metadata("design:type", Array)
], DatasetDto.prototype, "data", void 0);
class BribeDataDto {
}
exports.BribeDataDto = BribeDataDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['Teso', 'Ankole', 'Kigezi'],
        description: 'Region names'
    }),
    __metadata("design:type", Array)
], BribeDataDto.prototype, "labels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [DatasetDto],
        description: 'Datasets with various bribe metrics'
    }),
    __metadata("design:type", Array)
], BribeDataDto.prototype, "datasets", void 0);
//# sourceMappingURL=bribe-data.dto.js.map