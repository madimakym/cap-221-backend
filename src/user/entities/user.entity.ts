import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import { IsEmail } from 'class-validator';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    @IsEmail()
    email: string;

    @Column({ select: false })
    password: string;

    @Column({ nullable: true })
    cni: string;

    @Column({ nullable: true })
    secteur: string;

    @Column({ nullable: true })
    status: boolean;

    @Column()
    role: string;

    @CreateDateColumn()
    createdAt: String;

    @UpdateDateColumn()
    updtedAt: String;
}

