import { PrismaService } from '../prisma/prisma.service';
export declare class RegionsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllRegions(): Promise<string[]>;
    findDistrictsByRegion(region: string): Promise<string[]>;
    findFacilitiesByDistrict(district: string): Promise<string[]>;
    findLevelsByFacility(facility: string): Promise<string[]>;
}
