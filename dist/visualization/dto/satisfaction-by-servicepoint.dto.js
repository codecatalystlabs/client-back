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
exports.SatisfactionByServicepointDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SatisfactionByServicepointDto {
}
exports.SatisfactionByServicepointDto = SatisfactionByServicepointDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success', description: 'Response status message' }),
    __metadata("design:type", String)
], SatisfactionByServicepointDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            '1_OPD',
            '7_ART_clinic',
            '4_Antenatal',
            '3_Maternity',
            '9_Other',
            '5_EPI_YCC_Postnatal',
            '2_Medical_ward',
            '6_Surgical_ward',
            '8_Community_Services'
        ],
        description: 'Labels for service points'
    }),
    __metadata("design:type", Array)
], SatisfactionByServicepointDto.prototype, "labels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            35.08,
            20.76,
            10.63,
            9.35,
            8.85,
            5.91,
            5.86,
            2.04,
            1.53
        ],
        description: 'Satisfaction rate percentages by service point'
    }),
    __metadata("design:type", Array)
], SatisfactionByServicepointDto.prototype, "data", void 0);
//# sourceMappingURL=satisfaction-by-servicepoint.dto.js.map