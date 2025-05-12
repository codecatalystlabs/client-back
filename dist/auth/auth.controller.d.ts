import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login-request.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginRequestDto: LoginRequestDto): Promise<{
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
    createUser(createUserDto: CreateUserDto): Promise<{
        region: string | null;
        district: string | null;
        facility: string | null;
        type: string | null;
        username: string;
        national: import("generated/prisma").$Enums.users_national | null;
        role: import("generated/prisma").$Enums.users_role;
        userID: number;
    }>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<{
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
