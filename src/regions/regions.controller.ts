import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegionsResponseDto } from './dto/regions-response.dto';
import { DistrictsResponseDto } from './dto/districts-response.dto';
import { FacilitiesResponseDto } from './dto/facilities-response.dto';
import { LevelsResponseDto } from './dto/levels-response.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('regions')
@Controller('regions')
export class RegionsController {
    constructor(private readonly regionsService: RegionsService) { }

    @Get()
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Get all regions' })
    @ApiResponse({
        status: 200,
        description: 'Returns an array of regions',
        type: RegionsResponseDto
    })
    async findAll(): Promise<RegionsResponseDto> {
        const regions = await this.regionsService.findAllRegions();
        return {
            message: 'success',
            data: regions
        };
    }

    @Get(':region/districts')
    @ApiOperation({ summary: 'Get all districts in a specific region' })
    @ApiParam({ name: 'region', description: 'The region name' })
    @ApiResponse({
        status: 200,
        description: 'Returns an array of districts in the region',
        type: DistrictsResponseDto
    })
    async findDistricts(@Param('region') region: string): Promise<DistrictsResponseDto> {
        const districts = await this.regionsService.findDistrictsByRegion(region);
        return {
            message: 'success',
            data: districts
        };
    }

    @Get('districts/:district/facilities')
    @ApiOperation({ summary: 'Get all facilities in a specific district' })
    @ApiParam({ name: 'district', description: 'The district name' })
    @ApiResponse({
        status: 200,
        description: 'Returns an array of facilities in the district',
        type: FacilitiesResponseDto
    })
    async findFacilities(@Param('district') district: string): Promise<FacilitiesResponseDto> {
        const facilities = await this.regionsService.findFacilitiesByDistrict(district);
        return {
            message: 'success',
            data: facilities
        };
    }

    @Get('facilities/:facility/levels')
    @ApiOperation({ summary: 'Get all levels for a specific facility' })
    @ApiParam({ name: 'facility', description: 'The facility name' })
    @ApiResponse({
        status: 200,
        description: 'Returns an array of levels for the facility',
        type: LevelsResponseDto
    })
    async findLevels(@Param('facility') facility: string): Promise<LevelsResponseDto> {
        const levels = await this.regionsService.findLevelsByFacility(facility);
        return {
            message: 'success',
            data: levels
        };
    }
} 