import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm'
import { Users } from "../../user/entities/user.entity";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ default: 1 })
    active: number

    @Column({ nullable: true })
    category: string

    @Column({ nullable: true })
    resume: string

    @Column("longtext")
    description: string

    @Column({ nullable: true })
    image: string

    @ManyToOne(() =>
        Users, user => user.id,
        { onDelete: 'SET NULL' })

    @JoinColumn()
    writer: Users;

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updtedAt: String
}