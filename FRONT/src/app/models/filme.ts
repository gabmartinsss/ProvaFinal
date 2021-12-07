import { Categoria } from './categoria';
export interface Filme {
    //atributos
    id?: number;
    nome: string;
    ano: number;
    diretor: string;
    bilheteria: number;
    categoriaId: number;
    categoria?: Categoria;
    criadoem?: string;

}
