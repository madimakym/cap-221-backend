import { Media } from '../../media/entities/media.entity'
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { Categorie } from '../../categorie/entities/categorie.entity'

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    libelle: string

    @Column({ nullable: true })
    description: string

    @Column()
    price: string

    @Column()
    image: string

    @OneToMany(
        type => Media,
        media => media.product,
    )
    media: Media[];

    @ManyToOne(() =>
        Categorie, categorie => categorie.id,
        { onDelete: 'SET NULL' })
    @JoinColumn()
    categorie: Categorie;

    @CreateDateColumn()
    createdAt: String

    @Column()
    slug: string

    @UpdateDateColumn()
    updtedAt: String
}
