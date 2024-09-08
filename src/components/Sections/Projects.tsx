import { Box, Button, Card, CardContent, Container, Grid2, Link, Stack, styled, Tooltip } from '@mui/material'
import { StyledTypography as Typography } from '../Styled/StyledComponents'
import { Project } from '../../Interfaces/Project'
import { applyOpacity } from '../../utils/utils'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import StacksList from '../StacksList';
import ImgWithLoading from '../Utils/ImgWithLoading';
import { CheckCircle } from '@mui/icons-material';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

type Status = Project['status']

const Projects = () => {
    const projects: Array<Project> = [
        // nome: 'Dogs - Rede Social Para Cachorros',
        {
            nome: 'Dogs - Rede Social Para Cachorros',
            img: 'assets/images/dogs.jpg',
            descricao: 'Rede Social Para Cachorros. Completo, com comentários, posts, autenticação, etc.',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Projeto_Autodidata-React/tree/main/React-Origamid/08-Projeto_Final',
            linkProjeto: 'https://dogs-otavio.vercel.app/',
            status: 'em_desenvolvimento',
            stacks: ['redux', 'react', 'javascript', 'css', 'html']
        },
        //  nome: 'Animais Fantásticos',
        {
            nome: 'Animais Fantásticos',
            img: 'assets/images/animais_fantasticos.jpg',
            descricao: 'Site com funcionalidades feitas em JavaScript',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/origamid/Animais_Fantasticos',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/origamid/Animais_Fantasticos/index.html',
            status: 'concluido',
            stacks: ['javascript', 'html', 'css'],
        },
        //  nome: 'FlexBlog',
        {
            nome: 'FlexBlog',
            img: 'https://otaviomendessantos.github.io/Sites_Portifolio/assets/imgs/projects/screenshot-flexblog.jpg',
            descricao: 'Site feito para explorar as propriedades do display flexbox.',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/origamid/FlexBlog',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/origamid/FlexBlog/index.html',
            status: 'em_desenvolvimento',
            stacks: ['javascript', 'react', 'typescript'],
        },
        // nome: 'Pomodoro',
        {
            nome: 'Pomodoro',
            img: '/assets/images/pomodoro.jpg',
            descricao: 'Site pomodoro para estudos, com lista de tarefas, avisos sonoros e menu interativo.',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/autoritarios/Pomodoro/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/autoritarios/Pomodoro',
            status: 'concluido',
            stacks: ['javascript', 'html', 'css'],
        },
        // nome: 'Pokédex',
        {
            nome: 'Pokédex',
            img: '/assets/images/pokedex.jpg',
            descricao: 'Pokédex com listagem de Pokémons via pokeAPI.',
            linkProjeto: 'https://pokedex-react-topaz.vercel.app/',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Pokedex-React',
            status: 'concluido',
            stacks: ['javascript', 'html', 'css', 'react'],
        },
        // nome: 'Jogo da Velha',
        {
            nome: 'Jogo da Velha',
            img: '/assets/images/jogo_da_velha.jpg',
            descricao: 'Jogo da velha, Player vs Computador.',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/autoritarios/Jogo_da_Velha/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/autoritarios/Jogo_da_Velha',
            status: 'concluido',
            stacks: ['javascript', 'html', 'css'],
        },
        // nome: 'Jogo Detona Ralph'
        {
            nome: 'Jogo Detona Ralph',
            img: '/assets/images/detona_ralph.jpg',
            descricao: 'Jogo de acertar a toupeira na temática Detona Ralph (Falta adicionar responsividade).',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/dio/Detona_Ralph/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/dio/Detona_Ralph',
            status: 'refatorando',
            stacks: ['javascript', 'html', 'css'],
        },
        // nome: 'Jogo da Memória',
        {
            nome: 'Jogo da Memória',
            img: '/assets/images/jogo_da_memoria.jpg',
            descricao: 'Jogo da memória com emojis (Falta adicionar responsividade).',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/dio/Jogo_da_Memoria/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/dio/Jogo_da_Memoria',
            status: 'refatorando',
            stacks: ['javascript', 'html', 'css'],
        },
        // nome: 'Piano Virtual',
        {
            nome: 'Piano Virtual',
            img: '/assets/images/piano_virtual.jpg',
            descricao: 'Piano Virtual(Falta adicionar responsividade).',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/dio/Piano_Virtual/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/dio/Piano_Virtual',
            status: 'refatorando',
            stacks: ['javascript', 'html', 'css'],
        },
        // nome: 'Jogo Jo-Ken-Po Yu-Gi-Oh',
        {
            nome: 'Jogo Jo-Ken-Po Yu-Gi-Oh',
            img: '/assets/images/yu-gi-oh.jpg',
            descricao: 'Jogo de Jo-Ken-Po na temática de Yu-Gi-Oh (Falta adicionar responsividade).',
            linkProjeto: 'https://otaviomendessantos.github.io/Sites_Portifolio/projetos/dio/Jogo_Cartas_Yu-Gi-Oh/index.html',
            linkRepositorio: 'https://github.com/OtavioMendesSantos/Sites_Portifolio/tree/main/projetos/dio/Jogo_Cartas_Yu-Gi-Oh',
            status: 'refatorando',
            stacks: ['javascript', 'html', 'css'],
        },
    ]

    const ProjectStatus: React.FC<{ status: Status }> = ({ status }) => {
        switch (status) {
            case 'concluido':
                return <CheckCircle sx={{ color: 'success.main', fontSize: '1' }} />
            case 'em_desenvolvimento':
                return <WarningRoundedIcon sx={{ color: 'warning.main', fontSize: '1' }} />
            case 'nao_iniciado':
                return <ErrorRoundedIcon sx={{ color: 'error.main', fontSize: '1' }} />
            case 'refatorando':
                return <InfoRoundedIcon sx={{ color: 'info.main', fontSize: '1' }} />
        }
    }

    return (
        <Box component="section">
            <Typography indicate variant="h1" sx={{ mb: 2 }}>Projetos</Typography>
            <StyledContainer>
                {projects.map((project, index) => (
                    <StyledCard key={index}>
                        <CardContent sx={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Box sx={{ top: 16, left: 16, position: 'absolute' }} >
                                <Tooltip placement='top' arrow title={project.status.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}>
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
                                <Grid2 container spacing={2} sx={{ width: '100%', height: '100%' }}>
                                    <Grid2 size={{ xs: 12, sm: 4 }}>
                                        <ImgWithLoading
                                            alt={project.nome}
                                            src={project.img || ''}
                                            imgProps={{
                                                style: {
                                                    aspectRatio: '1 / 1',
                                                    borderRadius: '4px',
                                                }
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
                                        <StacksList
                                            containerProps={{
                                                sx: {
                                                    justifyContent: 'space-between'
                                                }
                                            }}
                                            itens={project.stacks}
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
                                        </Stack>
                                    </Grid2>
                                </Grid2>
                            </Stack>
                        </CardContent>
                    </StyledCard>
                ))}
            </StyledContainer>
        </Box>
    )
}

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: applyOpacity(theme.palette.primary.main, 0),
    backdropFilter: 'blur(1px)',
    flex: '1 0 400px',
    minHeight: '350px', 
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        flexBasis: '100%',
    },
    '& .MuiCardContent-root': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
}));

const StyledContainer = styled(Container)(({ }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'stretch', 
}));

export default Projects
