import { Media } from '../../media/entities/media.entity';
import { Categorie } from '../../categorie/entities/categorie.entity';
export declare class Product {
    id: number;
    libelle: string;
    description: string;
    price: string;
    image: string;
    media: Media[];
    categorie: Categorie;
    createdAt: String;
    slug: string;
    updtedAt: String;
}
