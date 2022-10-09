import { Product } from '../../product/entities/product.entity'
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class Categorie {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    libelle: string

    @Column({ nullable: true })
    description: string

    @Column({ nullable: true })
    image: string

    @OneToMany(
        type => Product,
        product => product.categorie,
    )
    product: Product[];

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updtedAt: String
}