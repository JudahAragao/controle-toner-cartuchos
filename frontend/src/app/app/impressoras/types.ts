import { Impressoras, Setores } from "@prisma/client";

export type ImpressoraComSetor = Impressoras & {
    setores: Setores | null; // Alterado de setor para setores
};