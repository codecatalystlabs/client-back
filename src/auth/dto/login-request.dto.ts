import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestDto {
    @ApiProperty({ example: 'johndoe', description: 'Username for login' })
    username: string;

    @ApiProperty({ example: 'password123', description: 'User password' })
    password: string;
} 