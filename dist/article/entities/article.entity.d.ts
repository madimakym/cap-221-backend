import { Users } from "../../user/entities/user.entity";
export declare class Article {
    id: number;
    title: string;
    active: number;
    category: string;
    description: string;
    image: string;
    writer: Users;
    createdAt: String;
    updtedAt: String;
}
