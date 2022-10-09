import { Repository } from 'typeorm';
import { Users } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwt;
    constructor(userRepository: Repository<Users>, jwt: JwtService);
    signup(user: any): Promise<any>;
    validateUser(email: string, password: string): Promise<any>;
    getByEmail(email: string): Promise<Users>;
    getByToken(condition: string): Promise<Users>;
    findOne(condition: string): Promise<Users>;
    login(user: Users): Promise<{
        access_token: string;
        role: string;
    }>;
}
