import { Injectable, UnauthorizedException, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { users_national } from 'generated/prisma';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { }

    async createUser(username: string, password: string, role: 'region' | 'district' | 'facility' | 'national', region?: string, district?: string, facility?: string, national?: users_national, type?: string) {
        // Check if user already exists
        const existingUser = await this.prisma.users.findUnique({
            where: { username }
        });

        if (existingUser) {
            throw new ConflictException('Username already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const user = await this.prisma.users.create({
            data: {
                username,
                password: hashedPassword,
                role,
                national,
                region,
                district,
                facility,
                type
            }
        });

        // Return user without password
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }

    async login(username: string, password: string) {
        // Find user by username
        const user = await this.prisma.users.findUnique({
            where: { username }
        });
        if (!user) {
            console.log('User not found');
            throw new UnauthorizedException('Invalid credentials');
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log("hhchchc")
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = {
            id: user.userID,
            username: user.username,
        };
      
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.userID,
                username: user.username,
                role: user.role,
                region: user.region,
                district: user.district,
                facility: user.facility,
            },
        };
    }

    async updateUser(userId: number, updateUserDto: UpdateUserDto) {
        // Check if user exists
        const existingUser = await this.prisma.users.findUnique({
            where: { userID: userId }
        });

        if (!existingUser) {
            throw new NotFoundException('User not found');
        }

        // If username is being updated, check if it's already taken
        if (updateUserDto.username && updateUserDto.username !== existingUser.username) {
            const usernameExists = await this.prisma.users.findUnique({
                where: { username: updateUserDto.username }
            });

            if (usernameExists) {
                throw new ConflictException('Username already exists');
            }
        }

        // Prepare update data
        const updateData: any = {};

        if (updateUserDto.username) {
            updateData.username = updateUserDto.username;
        }

        if (updateUserDto.password) {
            updateData.password = await bcrypt.hash(updateUserDto.password, 10);
        }

        if (updateUserDto.role) {
            updateData.role = updateUserDto.role;
            updateData.type = updateUserDto.role;
            if (updateUserDto.role === 'national') {
                updateData.national = 'national';
            }
        }

        if (updateUserDto.region) {
            updateData.region = updateUserDto.region;
        }

        if (updateUserDto.district) {
            updateData.district = updateUserDto.district;
        }

        if (updateUserDto.facility) {
            updateData.facility = updateUserDto.facility;
        }

        // Update the user
        const updatedUser = await this.prisma.users.update({
            where: { userID: userId },
            data: updateData
        });

        // Return user without password
        const { password, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
    }
} 