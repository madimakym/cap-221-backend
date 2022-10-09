import { Users } from '../user/entities/user.entity';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: any);
    findAll(): Promise<Users[]>;
    getByEmail(email: string): Promise<any>;
    markEmailAsConfirmed(email: string): Promise<any>;
    findById(id: number): Promise<Users>;
    update(id: number, user: Users): Promise<any>;
}
