import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../user/entities/user.entity';
import { getManager, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(Users) private usersRepository) { }

    async findAll(): Promise<Users[]> {
        return await this.usersRepository.find()
    }

    async getByEmail(email: string) {
        return await this.usersRepository.findOne({
            where: [{ "email": email }]
        })
    }

    async getGenre(genre: string) {
        return await this.usersRepository.count({
            where: [{ "genre": genre }]
        })
    }

    async groupByRegion() {
        const entityManager = getManager();
        const response = entityManager.query(`SELECT COUNT(id) AS total, region FROM users GROUP by region`)
        return response;
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