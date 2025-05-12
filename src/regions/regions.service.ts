import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RegionsService {
    constructor(private prisma: PrismaService) { }

    async findAllRegions(): Promise<string[]> {
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
            .filter(region => region !== null && region !== '') as string[];
    }

    async findDistrictsByRegion(region: string): Promise<string[]> {
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
            .filter(district => district !== null && district !== '') as string[];
    }

    async findFacilitiesByDistrict(district: string): Promise<string[]> {
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
            .filter(facility => facility !== null && facility !== '') as string[];
    }

    async findLevelsByFacility(facility: string): Promise<string[]> {
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
            .filter(level => level !== null && level !== '') as string[];
    }
} 