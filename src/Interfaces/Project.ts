type Status = 'nao_iniciado' | 'em_desenvolvimento' | 'concluido' | 'refatorando';

export interface Project {
    nome: string;
    img?: string;
    descricao: string;
    linkRepositorio: string;
    linkProjeto?: string;
    status: Status,
    stacks: Array<string>;
}
