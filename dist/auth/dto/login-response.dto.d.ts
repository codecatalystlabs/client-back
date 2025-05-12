export declare class LoginResponseDto {
    message: string;
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
