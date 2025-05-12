import { Body, Controller, Post, Put, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @ApiOperation({ summary: 'Authenticate user' })
    @ApiResponse({
        status: 200,
        description: 'User successfully authenticated',
        type: LoginResponseDto
    })
    @ApiResponse({
        status: 401,
        description: 'Invalid credentials'
    })
    async login(@Body() loginRequestDto: LoginRequestDto) {
        const userData = await this.authService.login(
            loginRequestDto.username,
            loginRequestDto.password
        );

        return userData;
    }

    @Post('register')
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({
        status: 201,
        description: 'User successfully created'
    })
    @ApiResponse({
        status: 409,
        description: 'Username already exists'
    })
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.authService.createUser(
            createUserDto.username,
            createUserDto.password,
            createUserDto.role,
            createUserDto.region,
            createUserDto.district,
            createUserDto.facility,
            createUserDto.national, 
            createUserDto.type
        );
    }

    @Put('users/:id')
    @ApiOperation({ summary: 'Update user information' })
    @ApiResponse({
        status: 200,
        description: 'User successfully updated'
    })
    @ApiResponse({
        status: 404,
        description: 'User not found'
    })
    @ApiResponse({
        status: 409,
        description: 'Username already exists'
    })
    async updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto
    ) {
        return this.authService.updateUser(id, updateUserDto);
    }
} 