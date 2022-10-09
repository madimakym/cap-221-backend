import { Product } from '../../product/entities/product.entity';
export declare class Categorie {
    id: number;
    libelle: string;
    description: string;
    image: string;
    product: Product[];
    createdAt: String;
    updtedAt: String;
}
