import { Box, Button, Card, CardContent, Chip, Container, FormControl, Grid2, InputLabel, Link, MenuItem, Select, SelectChangeEvent, Stack, styled, Theme, Tooltip } from '@mui/material'
import { StyledTypography as Typography, StyledCard } from '../Styled/StyledComponents'
import { Project } from '../../Interfaces/Project'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import StacksList from '../common/StacksList';
import ImgWithLoading from '../common/ImgWithLoading';
import { CheckCircle } from '@mui/icons-material';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import useResponsive from '../../hooks/useResponsive';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import Loader from '../common/Loader/Loader';
import { v4 as uuidv4 } from 'uuid';
import BoxSection from '../common/BoxSection';
// import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

type Status = Project['status']

interface FilterOptions {
    status: Status[];
    stack: string[];
}

const Projects = ({ className }: { className?: string }) => {
    const projects: Project[] = useMemo(() => ([
        {
            id: uuidv4(),
            nome: 'Clear Kanban',
            img: 'assets/images/clearkanban.png',
            descricao: 'Uma aplicação Kanban projetada para gerenciar demandas de forma eficiente e colaborativa. Oferece recursos como autenticação de usuário, recuperação de senha via e-mail, e comunicação em tempo real utilizando WebSockets, garantindo atualizações instantâneas e uma experiência de uso fluida.',
            linkProjeto: 'https://clearkanban.com',
            status: 'em_desenvolvimento',
            stacks: ['nodejs', 'typescript', 'react', 'postgresql', 'socketio', 'railway', 'jwt', 'sass', 'redux'],
        },
        {
            id: uuidv4(),
            nome: 'Dogs - Rede Social Para Cachorros',
            img: 'assets/images/dogs.jpg',
            descricao: 'Rede Social Para Cachorros. Completo, com comentários, posts, autenticação, etc.',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Projeto_Autodidata-React/tree/main/React-Origamid/08-Projeto_Final',
            linkProjeto: 'https://dogs-otavio.vercel.app/',
            status: 'em_desenvolvimento',
            stacks: ['redux', 'react', 'javascript', 'css', 'html']
        },
        {
            id: uuidv4(),
            nome: 'Animais Fantásticos',
            img: 'assets/images/animais_fantasticos.jpg',
            descricao: 'Site com funcionalidades feitas em JavaScript',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/origamid/Animais_Fantasticos',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/origamid/Animais_Fantasticos/index.html',
            status: 'concluido',
            stacks: ['javascript', 'html', 'css'],
        },
        {
            id: uuidv4(),
            nome: 'FlexBlog',
            img: 'https://otaviomendessantos.github.io/Sites_Portifolio/assets/imgs/projects/screenshot-flexblog.jpg',
            descricao: 'Site feito para explorar as propriedades do display flexbox.',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/origamid/FlexBlog',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/origamid/FlexBlog/index.html',
            status: 'concluido',
            stacks: ['html', 'css'],
        },
        {
            id: uuidv4(),
            nome: 'Pomodoro',
            img: '/assets/images/pomodoro.jpg',
            descricao: 'Site pomodoro para estudos, com lista de tarefas, avisos sonoros e menu interativo.',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/autoritarios/Pomodoro/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/autoritarios/Pomodoro',
            status: 'concluido',
            stacks: ['javascript', 'html', 'css'],
        },
        {
            id: uuidv4(),
            nome: 'Pokédex',
            img: '/assets/images/pokedex.jpg',
            descricao: 'Pokédex com listagem de Pokémons via pokeAPI.',
            linkProjeto: 'https://pokedex-react-topaz.vercel.app/',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Pokedex-React',
            status: 'concluido',
            stacks: ['javascript', 'html', 'css', 'react'],
        },
        {
            id: uuidv4(),
            nome: 'To Do List',
            img: '/assets/images/to_do_list.png',
            descricao: 'To Do List Básica, com uma lista de tarefas e botões de adição e remoção.',
            linkProjeto: 'https://todolist-otavio.vercel.app/',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/ToDoList-NextJs',
            status: 'concluido',
            stacks: ['nextjs', 'react', 'typescript', 'sass'],
        },
        {
            id: uuidv4(),
            nome: 'Jogo da Velha',
            img: '/assets/images/jogo_da_velha.jpg',
            descricao: 'Jogo da velha, Player vs Computador.',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/autoritarios/Jogo_da_Velha/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/autoritarios/Jogo_da_Velha',
            status: 'concluido',
            stacks: ['javascript', 'html', 'css'],
        },
        {
            id: uuidv4(),
            nome: 'Jogo Detona Ralph',
            img: '/assets/images/detona_ralph.jpg',
            descricao: 'Jogo de acertar a toupeira na temática Detona Ralph (Falta adicionar responsividade).',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/dio/Detona_Ralph/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/dio/Detona_Ralph',
            status: 'refatorando',
            stacks: ['javascript', 'html', 'css'],
        },
        {
            id: uuidv4(),
            nome: 'Jogo da Memória',
            img: '/assets/images/jogo_da_memoria.jpg',
            descricao: 'Jogo da memória com emojis (Falta adicionar responsividade).',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/dio/Jogo_da_Memoria/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/dio/Jogo_da_Memoria',
            status: 'refatorando',
            stacks: ['javascript', 'html', 'css'],
        },
        {
            id: uuidv4(),
            nome: 'Piano Virtual',
            img: '/assets/images/piano_virtual.jpg',
            descricao: 'Piano Virtual(Falta adicionar responsividade).',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/dio/Piano_Virtual/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/dio/Piano_Virtual',
            status: 'refatorando',
            stacks: ['javascript', 'html', 'css'],
        },
        {
            id: uuidv4(),
            nome: 'Jogo Jo-Ken-Po Yu-Gi-Oh',
            img: '/assets/images/yu-gi-oh.jpg',
            descricao: 'Jogo de Jo-Ken-Po na temática de Yu-Gi-Oh (Falta adicionar responsividade).',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/dio/Jogo_Cartas_Yu-Gi-Oh/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/dio/Jogo_Cartas_Yu-Gi-Oh',
            status: 'refatorando',
            stacks: ['javascript', 'html', 'css'],
        },
        {
            id: uuidv4(),
            nome: 'Breeze',
            descricao: 'Aplicativo mobile feito para previsão do tempo - Estudando React Native e Expo. ',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Breeze',
            status: 'em_planejamento',
            stacks: ['expo', 'react'],
        },
        // {
        //     id: uuidv4(),
        //     nome: 'Coffee Marketplace',
        //     descricao: 'Marketplace de cafe para o mundo.',
        //     linkRepositorio: '',
        //     status: 'nao_iniciado',
        //     stacks: ['node'],
        // },
    ]), []);

    const { isMobile } = useResponsive();
    const maxViewProjects = 3

    const [viewProjects, setViewProjects] = useState(maxViewProjects)
    const [isExpanded, setIsExpanded] = useState(false)
    const [filters, setFilters] = useState<FilterOptions>({
        status: [],
        stack: []
    })
    const [filteredProjects, setFilteredProjects] = useState(projects)

    const renameStatus = (status: string) => {
        return status.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
    }

    const filteredStacks = useMemo(() => {
        return (
            projects.reduce((acc, project) => {
                project.stacks.forEach((stack) => {
                    if (!acc.includes(stack)) {
                        acc.push(stack)
                    }
                })
                return acc
            }, [] as string[])
        )
    }, [projects])

    const filteredStatus = useMemo(() => {
        return (
            projects.reduce((acc, project) => {
                if (!acc.includes(project.status)) {
                    acc.push(project.status)
                }
                return acc
            }, [] as Status[])
        )
    }, [projects])

    const ProjectStatus: React.FC<{ status: Status }> = ({ status }) => {
        switch (status) {
            case 'concluido':
                return <CheckCircle sx={{ color: 'success.main', fontSize: '1' }} />
            case 'em_desenvolvimento':
                return <WarningRoundedIcon sx={{ color: 'warning.main', fontSize: '1' }} />
            case 'nao_iniciado':
                return <ErrorRoundedIcon sx={{ color: 'error.main', fontSize: '1' }} />
            case 'em_planejamento':
                return <ErrorRoundedIcon sx={{ color: 'grey.400', fontSize: '1' }} />
            case 'refatorando':
                return <InfoRoundedIcon sx={{ color: 'info.main', fontSize: '1' }} />
        }
    }

    const chipsSelect: React.FC<{ selected: string[] }> = ({ selected }) => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                }}
            >
                <AnimatePresence>
                    {selected.map((value) => (
                        <motion.div
                            key={value}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ marginRight: '0.5rem' }}
                        >
                            <Chip
                                size="small"
                                label={renameStatus(value)}
                            // onDelete={(value) => handleRemoveChip(value)}
                            // deleteIcon={<ClearRoundedIcon />}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </Box>
        )
    }

    const handleFilterChange = (event: SelectChangeEvent<string[]>, name: string) => {
        const { target: { value } } = event
        setFilters((prev) => ({ ...prev, [name]: value as string[] }))
    }

    useEffect(() => {
        if (filters.stack.length === 0 && filters.status.length === 0) {
            setFilteredProjects(projects)
            return
        } else {
            const filtered = projects.filter((project) => {
                const hasAllStacks = filters.stack.every(stack => project.stacks.includes(stack));
                if (filters.status.length === 0) { return hasAllStacks }
                const hasStatus = filters.status.includes(project.status);

                return hasAllStacks && hasStatus;
            });
            setFilteredProjects(filtered)
        }
    }, [filters, projects])

    // const handleRemoveChip = (item: string) => {
    //     console.log(item);
    //     setFilters((prev) => ({ ...prev, stack: prev.stack.filter((stack) => stack !== item) }))
    // }

    const handleClick = () => {
        setViewProjects((prev) => prev + maxViewProjects)
    }

    const projectStacks = (stacks: string[]): { name: string }[] => {
        return stacks.map((stack) => ({ name: stack }))
    }

    return (
        <BoxSection title="Projetos" className={className}>
            <Typography indicate variant="h1" sx={{ mb: 2 }}>Projetos</Typography>
            <StyledContainer>
                <Card sx={{ width: '100%' }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ p: 2, gap: 2, flexWrap: 'wrap' }}
                        useFlexGap
                    >
                        <FormControl sx={{ flex: '1 0 150px' }} size='small'>
                            <InputLabel
                                id='Stack-Label'
                                sx={(theme: Theme) => ({
                                    color: theme.palette.text.primary,
                                })}
                            >
                                Stack
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId='Stack-Label'
                                label='Stack'
                                onChange={(event) => handleFilterChange(event, 'stack')}
                                value={filters.stack}
                                multiple
                                renderValue={(selected) => (chipsSelect({ selected }))}
                            >
                                <MenuItem value="" disabled>Selecione...</MenuItem>
                                {filteredStacks.map((project, index) => (
                                    <MenuItem value={project} key={index}>{project}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ flex: '1 0 150px' }} size='small'>
                            <InputLabel
                                id='Status-Label'
                                sx={(theme: Theme) => ({
                                    color: theme.palette.text.primary,
                                })}
                            >
                                Status
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId='Status-Label'
                                label='Status'
                                onChange={(event) => handleFilterChange(event, 'status')}
                                value={filters.status}
                                multiple
                                renderValue={(selected) => (chipsSelect({ selected }))}

                            >
                                <MenuItem value="" disabled>Selecione...</MenuItem>
                                {filteredStatus.map((project, index) => (
                                    <MenuItem value={project} key={index}>{renameStatus(project)}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                </Card>
                <AnimatePresence>
                    {filteredProjects.length > 0
                        ? filteredProjects.map((project, index) => (
                            (index + 1 <= viewProjects)
                                ? (
                                    <motion.div
                                        key={project.id}
                                        style={{ width: '100%' }}
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        viewport={{ once: false, amount: 0.4, margin: '3000px 0px 0px 0px' }}
                                        transition={{
                                            duration: 0.3,
                                            delay: (index % 2) * 0.2
                                        }}
                                    >
                                        <StyledCard key={index}>
                                            <CardContent sx={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                                <Box sx={{ top: 16, left: 16, position: 'absolute' }} >
                                                    <Tooltip placement='top' arrow title={renameStatus(project.status)}>
                                                        <Box sx={{ height: 'min-content', width: 'min-content' }}>
                                                            <ProjectStatus status={project.status} />
                                                        </Box>
                                                    </Tooltip>
                                                </Box>
                                                <Typography
                                                    variant='h2'
                                                    align='center'
                                                    sx={{ mb: 2, px: 2.5 }}
                                                >
                                                    {project.nome}
                                                </Typography>
                                                <Stack direction="row" sx={{ width: '100%', flexGrow: 1 }}>
                                                    <Grid2 container spacing={2} sx={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                                                        <Grid2 size={{ xs: 12, sm: 4 }}>
                                                            <ImgWithLoading
                                                                alt={project.nome}
                                                                src={project.img || '/assets/images/no_image.png'}
                                                                imgProps={{
                                                                    style: {
                                                                        aspectRatio: '1 / 1',
                                                                        borderRadius: '4px',
                                                                    }
                                                                }}
                                                                boxProps={{
                                                                    sx: {
                                                                        width: isMobile ? '80%' : '100%',
                                                                        margin: '0 auto',
                                                                    },

                                                                }}
                                                            />
                                                        </Grid2>
                                                        <Grid2
                                                            size={{ xs: 12, sm: 8 }}
                                                            sx={{
                                                                display: 'flex',
                                                                flexDirection: 'column',
                                                                justifyContent: 'space-between',
                                                            }}
                                                        >
                                                            <Box>
                                                                <Typography>
                                                                    {project.descricao}
                                                                </Typography>
                                                            </Box>
                                                            <Typography variant='subtitle1'>Tecnologias Utilizadas:</Typography>
                                                            <StacksList
                                                                containerProps={{
                                                                    sx: {
                                                                        justifyContent: 'space-evenly'
                                                                    }
                                                                }}
                                                                itens={projectStacks(project.stacks)}
                                                            />
                                                            <Stack
                                                                useFlexGap
                                                                sx={{ gap: 1 }}
                                                            >
                                                                {project.linkProjeto &&
                                                                    <Link
                                                                        href={project.linkProjeto}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <Button
                                                                            fullWidth
                                                                            variant="contained"
                                                                            sx={{ gap: 1 }}
                                                                        >
                                                                            Veja o projeto <OpenInNewRoundedIcon />
                                                                        </Button>
                                                                    </Link>}
                                                                {project.linkRepositorio &&
                                                                    <Link
                                                                        href={project.linkRepositorio}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <Button
                                                                            fullWidth
                                                                            variant="contained"
                                                                            sx={{ gap: 1 }}
                                                                        >
                                                                            Veja o código
                                                                            <CodeRoundedIcon />
                                                                        </Button>
                                                                    </Link>
                                                                }
                                                            </Stack>
                                                        </Grid2>
                                                    </Grid2>
                                                </Stack>
                                            </CardContent>
                                        </StyledCard>
                                    </motion.div>
                                )
                                : null
                        ))
                        : <Box>
                            <Loader /><Typography> Nenhum projeto encontrado</Typography>
                        </Box>
                    }
                </AnimatePresence>
                <Box>
                    {filteredProjects.length > viewProjects ? (
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => setViewProjects((prev) => prev + maxViewProjects)}
                        >
                            Ver mais
                        </Button>
                    ) : (
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => setViewProjects(maxViewProjects)}
                        >
                            Ver menos
                        </Button>
                    )}
                </Box>
            </StyledContainer>
        </BoxSection>
    )
}

const StyledContainer = styled(Container)(({ }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'stretch',
}));

export default Projects
