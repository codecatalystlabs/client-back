import { users_national } from 'generated/prisma';
export declare class CreateUserDto {
    username: string;
    national: users_national;
    type: string;
    password: string;
    role: 'region' | 'district' | 'facility' | 'national';
    region?: string;
    district?: string;
    facility?: string;
}
