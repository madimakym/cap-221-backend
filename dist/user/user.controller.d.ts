import { HttpStatus } from '@nestjs/common';
import { Users } from '../user/entities/user.entity';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { ConfigService } from '@nestjs/config';
import { MailService } from '../mail/mail.service';
export declare class UserController {
    private readonly userService;
    private readonly jwtService;
    private readonly mailService;
    private configService;
    constructor(userService: UserService, jwtService: JwtService, mailService: MailService, configService: ConfigService);
    findAll(): Promise<Users[]>;
    findByRegion(): Promise<any>;
    findOneById(params: any): Promise<Users>;
    findGenre(params: any): Promise<Users>;
    Update(id: number, data: Users): Promise<{
        status: HttpStatus;
        message: any;
    }>;
    changePassword(id: number, body: Users): Promise<{
        statusCode: HttpStatus;
        message: string;
        status?: undefined;
    } | {
        status: HttpStatus;
        message: any;
        statusCode?: undefined;
    }>;
    resetPassword({ email }: {
        email: any;
    }): Promise<{
        statusCode: HttpStatus;
    }>;
    checkToken({ token }: {
        token: any;
    }): Promise<{
        statusCode: HttpStatus;
        message: any;
    }>;
    search(params: any, req: any): Promise<void>;
}
