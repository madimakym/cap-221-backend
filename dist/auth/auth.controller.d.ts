import { HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
export declare class AuthController {
    private authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    signup(user: Users): Promise<any>;
    signupCheck(user: Users): Promise<boolean>;
    login(user: any): Promise<{
        access_token: string;
        role: string;
    }>;
    check_user(user: any): Promise<{
        status: HttpStatus;
        message: any;
    }>;
    authenticate(request: any): Promise<Users>;
}
