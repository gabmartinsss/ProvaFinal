import { Filme } from "./filme";

export interface ItemVenda {
    id?: number;
    filme: Filme;
    filmeId: number;
    quantidade: number;
    criadoEm?: Date;
}