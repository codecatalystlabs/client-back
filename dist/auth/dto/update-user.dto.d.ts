import { users_national } from 'generated/prisma';
export declare class UpdateUserDto {
    username?: string;
    password?: string;
    role?: 'region' | 'district' | 'facility' | 'national';
    region?: string;
    district?: string;
    facility?: string;
    national: users_national;
    type: string;
}
