import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(Users)
    private userRepository: Repository<Users>,
        private jwt: JwtService) { }

    async signup(user) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash
        const resp = await this.userRepository.save(user);
        resp.password = undefined;
        return resp;
    }

    async validateUser(email: string, password: string): Promise<any> {
        const foundUser = await this.userRepository.findOne({ email });
        if (foundUser) {
            if (await bcrypt.compare(password, foundUser.password)) {
                const { password, ...result } = foundUser
                return result;
            }
            return null;
        }
        return null
    }

    async getByEmail(email: string) {
        return this.userRepository.findOne({
            select: ["id", "firstname", "lastname", "email", "password"],
            where: [{ "email": email }]
        });
    }

    async getByToken(condition: string) {
        return this.userRepository.findOne(condition);
    }

    async findOne(condition: string) {
        return this.userRepository.findOne(condition);
    }

    async login(user: Users) {
        const payload = { ...user }
        payload.password = undefined;
        const token = this.jwt.sign(payload);
        return {
            access_token: token,
            role: user.role
        };
    }
}
