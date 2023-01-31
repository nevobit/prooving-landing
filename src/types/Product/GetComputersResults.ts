import { Computer } from "../Computer";

export interface GetComputersResults {
    info: Info;
    computers: Computer;
}

export interface Info{
    count: number;
    pages: number;
    next: string;
    prev: null;
}
