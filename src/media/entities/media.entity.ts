import { Product } from '../../product/entities/product.entity';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

@Entity()
export class Media {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string

    @ManyToOne(
        type => Product,
        product => product.media,
        { cascade: true, onDelete: 'CASCADE' }
    )
    product: Product;

    // @ManyToOne(
    //     type => Categor,
    //     product => product.media,
    //     { cascade: true, onDelete: 'CASCADE' }
    // )
    // product: Product;



    // @ManyToOne(() => Users, (professional: Users) => professional.id)
    // public professional: Users;

    // @ManyToOne(() => Users, (customer: Users) => customer.id)
    // public customer: Users;

    @CreateDateColumn()
    createdAt: String

    @UpdateDateColumn()
    updtedAt: String
}
