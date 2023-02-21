import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Metier {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    libelle: string

    @Column({ nullable: true })
    groupe: string

    @Column({ nullable: true })
    description: string

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updtedAt: String
}