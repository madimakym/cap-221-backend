import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../user/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(Users) private usersRepository) { }

    async findAll(): Promise<Users[]> {
        return await this.usersRepository.find()
    }

    // async findAll(role: string): Promise<Users[]> {
    //     return await this.usersRepository.find({
    //         where: [{ "role": role }]
    //     })
    // }

    async getByEmail(email: string) {
        return await this.usersRepository.findOne({
            where: [{ "email": email }]
        })
    }

    async markEmailAsConfirmed(email: string) {
        return this.usersRepository.update({ email }, {
            isEmailConfirmed: true
        });
    }

    async findById(id: number): Promise<Users> {
        return await this.usersRepository.findOne(id);
    }

    async update(id: number, user: Users) {
        return await this.usersRepository.update(id, user);
    }
}