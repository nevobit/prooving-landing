import { Product } from "../Product";

interface Game {
    uuid: string;
    name: string;
    image: string;
}

interface Program {
    uuid: string;
    name: string;
    image: string;
}

export interface Computer {
    uuid: string;
    name: string;
    slug: string;
    specs: any[];
    images: string[];
    category: string;
    brand: string;
    sold: number;
    color: string;
    ratings: number;
    games: Game[];
    programs: Program[];
    price: number;
    wattage: number;
    status: boolean;
    description: string;
}