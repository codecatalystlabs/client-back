import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { users_national } from 'generated/prisma';

export class CreateUserDto {
    @ApiProperty({ description: 'Username for the new user' })
    @IsString()
    username: string;

    @ApiProperty({ description: '' })
    @IsString()
    national: users_national;


    @ApiProperty({ description: '' })
    @IsString()
    type: string;

    @ApiProperty({ description: 'Password for the new user' })
    @IsString()
    password: string;

    @ApiProperty({ 
        description: 'Role of the user',
        enum: ['region', 'district', 'facility', 'national']
    })
    @IsEnum(['region', 'district', 'facility', 'national'])
    role: 'region' | 'district' | 'facility' | 'national';

    @ApiProperty({ description: 'Region name (required for region role)', required: false })
    @IsString()
    @IsOptional()
    region?: string;

    @ApiProperty({ description: 'District name (required for district role)', required: false })
    @IsString()
    @IsOptional()
    district?: string;

    @ApiProperty({ description: 'Facility name (required for facility role)', required: false })
    @IsString()
    @IsOptional()
    facility?: string;
} 