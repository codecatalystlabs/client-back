import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class DashboardFilterDto {
    @ApiProperty({
        example: 'Central',
        description: 'Filter by region (required if role is not national)',
        required: false
    })
    @IsOptional()
    @IsString()
    region?: string;

    @ApiProperty({
        example: 'Kampala',
        description: 'Filter by district',
        required: false
    })
    @IsOptional()
    @IsString()
    district?: string;

    @ApiProperty({
        example: 'Mulago Hospital',
        description: 'Filter by facility',
        required: false
    })
    @IsOptional()
    @IsString()
    facility?: string;
} 