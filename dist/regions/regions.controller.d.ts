import { RegionsService } from './regions.service';
import { RegionsResponseDto } from './dto/regions-response.dto';
import { DistrictsResponseDto } from './dto/districts-response.dto';
import { FacilitiesResponseDto } from './dto/facilities-response.dto';
import { LevelsResponseDto } from './dto/levels-response.dto';
export declare class RegionsController {
    private readonly regionsService;
    constructor(regionsService: RegionsService);
    findAll(): Promise<RegionsResponseDto>;
    findDistricts(region: string): Promise<DistrictsResponseDto>;
    findFacilities(district: string): Promise<FacilitiesResponseDto>;
    findLevels(facility: string): Promise<LevelsResponseDto>;
}
