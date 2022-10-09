import { AuthService } from './auth.service';
import { Users } from '../user/entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(user: Users): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        role: string;
    }>;
    authenticate(request: any): Promise<Users>;
}
