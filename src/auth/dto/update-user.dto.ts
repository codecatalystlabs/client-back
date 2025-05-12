import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { users_national } from 'generated/prisma';

export class UpdateUserDto {
    @ApiProperty({ description: 'Username of the user', required: false })
    @IsString()
    @IsOptional()
    username?: string;

    @ApiProperty({ description: 'New password for the user', required: false })
    @IsString()
    @IsOptional()
    password?: string;

    @ApiProperty({ 
        description: 'Role of the user',
        enum: ['region', 'district', 'facility', 'national'],
        required: false
    })
    @IsEnum(['region', 'district', 'facility', 'national'])
    @IsOptional()
    role?: 'region' | 'district' | 'facility' | 'national';

    @ApiProperty({ description: 'Region name', required: false })
    @IsString()
    @IsOptional()
    region?: string;

    @ApiProperty({ description: 'District name', required: false })
    @IsString()
    @IsOptional()
    district?: string;

    @ApiProperty({ description: 'Facility name', required: false })
    @IsString()
    @IsOptional()
    facility?: string;



    @ApiProperty({ description: '' })
    @IsString()
    national: users_national;


    @ApiProperty({ description: '' })
    @IsString()
    type: string;
} 