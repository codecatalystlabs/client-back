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
exports.RegionsResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RegionsResponseDto {
}
exports.RegionsResponseDto = RegionsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'success', description: 'Response status message' }),
    __metadata("design:type", String)
], RegionsResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['Central Region', 'Eastern Region'],
        description: 'List of available regions'
    }),
    __metadata("design:type", Array)
], RegionsResponseDto.prototype, "data", void 0);
//# sourceMappingURL=regions-response.dto.js.map