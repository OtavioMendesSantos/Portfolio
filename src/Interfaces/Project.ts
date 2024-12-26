type Status = 'nao_iniciado' | 'em_planejamento' | 'em_desenvolvimento' | 'concluido' | 'refatorando';

export interface Project {
    id: string,
    nome: string;
    img?: string;
    descricao: string;
    linkRepositorio?: string;
    linkProjeto?: string;
    status: Status,
    stacks: Array<string>;
}
