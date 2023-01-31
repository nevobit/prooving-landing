import { Computer } from './index';

export interface GetComputersResults {
    info: Info;
    items: Computer[];
}

export interface Info{
    count: number;
    pages: number;
    next: string;
    prev: null;
}
