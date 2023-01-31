export interface Product {
    uuid: string;
    name: string;
    slug: string;
    images: string[];
    category: string;
    brand: string;
    sold: number;
    color: string;
    ratings: number;
    price: number;
    wattage: number;
    status: boolean;
    description: string;
}