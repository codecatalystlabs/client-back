import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
    @ApiProperty({ example: 'success', description: 'Response status message' })
    message: string;

    @ApiProperty({
        example: {
            userID: 1,
            username: 'johndoe',
            role: 'facility',
            region: 'Central',
            district: 'Kampala',
            facility: 'Hospital ABC',
            type: 'admin'
        },
        description: 'User information'
    })
    data: {
        userID: number;
        username: string;
        role: string;
        region?: string;
        district?: string;
        facility?: string;
        type: string;
    };
} 