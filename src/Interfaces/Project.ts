type Status = 'nao_iniciado' | 'em_planejamento' | 'em_desenvolvimento' | 'concluido' | 'refatorando';

export interface Project {
    id: string,
    name: string;
    img?: string;
    description: string;
    linkRepositorio?: string;
    linkProjeto?: string;
    status: Status,
    stacks: Array<string>;
}
