import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from './dto/update-user.dto';
import { users_national } from 'generated/prisma';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    createUser(username: string, password: string, role: 'region' | 'district' | 'facility' | 'national', region?: string, district?: string, facility?: string, national?: users_national, type?: string): Promise<{
        region: string | null;
        district: string | null;
        facility: string | null;
        type: string | null;
        username: string;
        national: import("generated/prisma").$Enums.users_national | null;
        role: import("generated/prisma").$Enums.users_role;
        userID: number;
    }>;
    login(username: string, password: string): Promise<{
        access_token: string;
        user: {
            id: number;
            username: string;
            role: import("generated/prisma").$Enums.users_role;
            region: string;
            district: string;
            facility: string;
        };
    }>;
    updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<{
        region: string | null;
        district: string | null;
        facility: string | null;
        type: string | null;
        username: string;
        national: import("generated/prisma").$Enums.users_national | null;
        role: import("generated/prisma").$Enums.users_role;
        userID: number;
    }>;
}
