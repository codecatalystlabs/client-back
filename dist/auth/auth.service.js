"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async createUser(username, password, role, region, district, facility, national, type) {
        const existingUser = await this.prisma.users.findUnique({
            where: { username }
        });
        if (existingUser) {
            throw new common_1.ConflictException('Username already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
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
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    async login(username, password) {
        const user = await this.prisma.users.findUnique({
            where: { username }
        });
        if (!user) {
            console.log('User not found');
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log("hhchchc");
            throw new common_1.UnauthorizedException('Invalid credentials');
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
    async updateUser(userId, updateUserDto) {
        const existingUser = await this.prisma.users.findUnique({
            where: { userID: userId }
        });
        if (!existingUser) {
            throw new common_1.NotFoundException('User not found');
        }
        if (updateUserDto.username && updateUserDto.username !== existingUser.username) {
            const usernameExists = await this.prisma.users.findUnique({
                where: { username: updateUserDto.username }
            });
            if (usernameExists) {
                throw new common_1.ConflictException('Username already exists');
            }
        }
        const updateData = {};
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
        const updatedUser = await this.prisma.users.update({
            where: { userID: userId },
            data: updateData
        });
        const { password, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map