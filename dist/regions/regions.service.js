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
exports.RegionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RegionsService = class RegionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllRegions() {
        const satisfactions = await this.prisma.satisfaction.findMany({
            select: {
                region: true,
            },
            distinct: ['region'],
            where: {
                region: {
                    not: null,
                },
            },
        });
        return satisfactions
            .map(satisfaction => satisfaction.region)
            .filter(region => region !== null && region !== '');
    }
    async findDistrictsByRegion(region) {
        const satisfactions = await this.prisma.satisfaction.findMany({
            select: {
                district: true,
            },
            distinct: ['district'],
            where: {
                region: region,
                district: {
                    not: null,
                },
            },
        });
        return satisfactions
            .map(satisfaction => satisfaction.district)
            .filter(district => district !== null && district !== '');
    }
    async findFacilitiesByDistrict(district) {
        const satisfactions = await this.prisma.satisfaction.findMany({
            select: {
                facility: true,
            },
            distinct: ['facility'],
            where: {
                district: district,
                facility: {
                    not: null,
                },
            },
        });
        return satisfactions
            .map(satisfaction => satisfaction.facility)
            .filter(facility => facility !== null && facility !== '');
    }
    async findLevelsByFacility(facility) {
        const satisfactions = await this.prisma.satisfaction.findMany({
            select: {
                hlevel: true,
            },
            distinct: ['hlevel'],
            where: {
                facility: facility,
                hlevel: {
                    not: null,
                },
            },
        });
        return satisfactions
            .map(satisfaction => satisfaction.hlevel)
            .filter(level => level !== null && level !== '');
    }
};
exports.RegionsService = RegionsService;
exports.RegionsService = RegionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RegionsService);
//# sourceMappingURL=regions.service.js.map