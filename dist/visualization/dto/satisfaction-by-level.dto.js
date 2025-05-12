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
exports.SatisfactionByLevelDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SatisfactionByLevelDto {
}
exports.SatisfactionByLevelDto = SatisfactionByLevelDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success', description: 'Response status message' }),
    __metadata("design:type", String)
], SatisfactionByLevelDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            'HC_III',
            'HC_IV',
            'Regional_Referral_Hospital',
            'General_Hospital',
            'HC_II',
            'National_Referral_Hospital',
            'Community'
        ],
        description: 'Labels for facility levels'
    }),
    __metadata("design:type", Array)
], SatisfactionByLevelDto.prototype, "labels", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [44.43, 16.9, 13.68, 11.06, 9.27, 4.57, 0.09],
        description: 'Satisfaction rate percentages by level'
    }),
    __metadata("design:type", Array)
], SatisfactionByLevelDto.prototype, "data", void 0);
//# sourceMappingURL=satisfaction-by-level.dto.js.map