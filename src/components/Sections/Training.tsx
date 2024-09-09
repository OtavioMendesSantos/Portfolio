import { Box, Button, Card, CardContent, Container, Divider, Grid2, IconButton, IconButtonProps, Stack, styled, Tooltip, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Theme } from '@mui/material'
import { StyledTypography as Typography } from '../Styled/StyledComponents'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { applyOpacity } from '../../utils/utils';
import ImgWithLoading from '../Utils/ImgWithLoading';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { CheckCircle } from '@mui/icons-material';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface Certificate {
    name: string;
    horas: number;
    organization: string;
    src: string;
    description: string;
}

interface CurriculumItem {
    ordem: number;
    unidadeCurricular: string;
    ch: number;
}

const curriculumData: CurriculumItem[] = [
    { ordem: 1, unidadeCurricular: 'Introdução a Computação', ch: 60 },
    { ordem: 2, unidadeCurricular: 'Lógica de Programação', ch: 70 },
    { ordem: 3, unidadeCurricular: 'Matemática Computacional', ch: 60 },
    { ordem: 4, unidadeCurricular: 'Padrões Web', ch: 60 },
    { ordem: 5, unidadeCurricular: 'Laboratório de Inovação I', ch: 100 },
    { ordem: 6, unidadeCurricular: 'Comunicação Empresarial', ch: 100 },
    { ordem: 7, unidadeCurricular: 'Extensão', ch: 50 },
    { ordem: 8, unidadeCurricular: 'Fundamentos de Banco de Dados', ch: 60 },
    { ordem: 9, unidadeCurricular: 'Engenharia de Software', ch: 70 },
    { ordem: 10, unidadeCurricular: 'Linguagem Técnica de Programação', ch: 60 },
    { ordem: 11, unidadeCurricular: 'Laboratório de Inovação II', ch: 100 },
    { ordem: 12, unidadeCurricular: 'Linguagem de Programação para Web I', ch: 60 },
    { ordem: 13, unidadeCurricular: 'Ética Profissional, Desenvolvimento Sustentável e Empreendedorismo', ch: 50 },
    { ordem: 14, unidadeCurricular: 'Fundamentos de Computação em Nuvem', ch: 50 },
    { ordem: 15, unidadeCurricular: 'Linguagem Técnica de Programação', ch: 50 },
    { ordem: 16, unidadeCurricular: 'Linguagem de Banco de Dados', ch: 70 },
    { ordem: 17, unidadeCurricular: 'Linguagem de Programação para Web II', ch: 60 },
    { ordem: 18, unidadeCurricular: 'Linguagem de Programação Orientada à Objetos I', ch: 60 },
    { ordem: 19, unidadeCurricular: 'Gestão de Projetos', ch: 60 },
    { ordem: 20, unidadeCurricular: 'Laboratório de Inovação III', ch: 100 },
    { ordem: 21, unidadeCurricular: 'Laboratório de Inovação III', ch: 50 },
    { ordem: 22, unidadeCurricular: 'Sistemas Operacionais', ch: 50 },
    { ordem: 23, unidadeCurricular: 'Extensão', ch: 50 },
    { ordem: 24, unidadeCurricular: 'Linguagem de Programação Orientada à Objetos II', ch: 60 },
    { ordem: 25, unidadeCurricular: 'Linguagem de Programação para Mobile', ch: 60 }
];

const Training = () => {
    const theme = useTheme();
    const [activeImg, setActiveImg] = useState(1);
    const [prevAnimation, setPrevAnimation] = useState<'left' | 'right' | null>(null);
    const [autoClick, setAutoClick] = useState(true);
    const refAction = useRef<NodeJS.Timeout | null>(null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const certificates: Certificate[] = [
        {
            name: 'React',
            organization: 'Origamid',
            src: '/assets/images/certificates/react-origamid.png',
            horas: 36,
            description: 'Curso intensivo sobre React, abrangendo desde a sintaxe básica até conceitos avançados como Hooks e Context API. Inclui um projeto final de conclusão onde desenvolvemos um aplicativo completo (Dogs).'
        },
        {
            name: 'JavaScript',
            organization: 'Origamid',
            src: '/assets/images/certificates/javascript-origamid.jpg',
            horas: 74,
            description: 'Formação completa em JavaScript, cobrindo desde os fundamentos até técnicas avançadas. O curso inclui o uso de classes, objetos, web APIs, padrões de projeto e a manipulação do DOM.'
        },
        {
            name: 'FlexBox',
            organization: 'Origamid',
            src: '/assets/images/certificates/flexbox-origamid.jpg',
            horas: 6,
            description: 'Curso focado em CSS Flexbox, abordando propriedades como flex, flexShrink, e flexGrow para criar layouts responsivos e flexíveis.'
        },
        {
            name: 'Desenvolvimento de Jogos com JavaScript',
            organization: 'DIO',
            src: '/assets/images/certificates/desenvolvimento_de_jogos_com_js-dio.jpg',
            horas: 77,
            description: 'Introdução ao desenvolvimento de jogos utilizando JavaScript, abordando conceitos básicos de programação de jogos e criação de interatividade. Inclui projetos feitos durante o curso (Piano Virtual, Jogo Detona Ralph, Jogo da Memória, etc).'
        },
        {
            name: 'Adm Banco de Dados',
            organization: 'Senai',
            src: '/assets/images/certificates/adm_banco_de_dados-senai.jpg',
            horas: 240,
            description: 'Curso completo sobre administração de bancos de dados, incluindo teoria de bancos de dados, relacionamentos e cardinalidades. Aborda também SQL básico e o uso de SQL Server e MySQL.'
        },
        {
            name: 'Desenvolvimento Back End com Kotlin',
            organization: 'DIO',
            src: '/assets/images/certificates/desenvolvimento_back_end_com_kotlin.jpg',
            horas: 52,
            description: 'Introdução ao desenvolvimento back end utilizando Kotlin, cobrindo fundamentos da linguagem e a criação de APIs e serviços.'
        },
    ]

    useEffect(() => {
        if (autoClick) {
            refAction.current = setInterval(() => {
                handleClick('right');
            }, 5000);
        }

        return () => {
            if (refAction.current) {
                clearInterval(refAction.current);
            }
        };
    }, [autoClick])

    const handleClick = (direction: 'left' | 'right', automatic: boolean = true) => {
        if (!automatic) {
            setAutoClick(false)
        }
        setPrevAnimation(direction);
        if (direction === 'left') {
            setActiveImg((prevState) => (prevState === 1 ? certificates.length : prevState - 1));
        } else if (direction === 'right') {
            setActiveImg((prevState) => (prevState === certificates.length ? 1 : prevState + 1));
        }
    };

    const compareTodayDate = (year: number, month: number) => {
        const currentDate = new Date();
        const comparisonDate = new Date(year, month - 1); // Mês é 0-indexado
        return currentDate < comparisonDate;
    }
    return (
        <Box>
            <Typography indicate variant="h1" sx={{ mb: 2 }}>Formação</Typography>
            <Container>
                <Typography variant="h2">Faculdade </Typography>
                <Card sx={{ width: 'fit-content', my: 2 }}>
                    <CardContent>
                        <Stack direction="row" gap={1}>
                            <Tooltip title={compareTodayDate(2025, 12) ? 'Em andamento' : 'Concluído'} arrow placement='top'>
                                <Box>
                                    {compareTodayDate(2025, 12) ? <InfoRoundedIcon sx={{ color: 'info.main', fontSize: '1' }} /> : <CheckCircle sx={{ color: 'success.main', fontSize: '1' }} />}
                                </Box>
                            </Tooltip>
                            <Typography variant="h3">Análise e Desenvolvimento de Sistemas</Typography>
                        </Stack>
                        <Typography variant="body1" sx={{ mb: 2, width: '100%', display: 'block' }}>Senac Df  (02/2024 - 12/2025)</Typography>
                        <Button
                            sx={{ width: '100%', display: 'flex', gap: 1 }}
                            variant="contained"
                            onClick={handleOpen}
                        >
                            Ver Matérias <ArrowOutwardRoundedIcon />
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                        >
                            <Box sx={{
                                position: 'absolute' as 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                maxWidth: '600px',
                                maxHeight: '600px',
                                bgcolor: 'background.paper',
                                boxShadow: 24,
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{ position: 'relative' }}
                                >
                                    <Typography variant="h2" align='center' sx={{ mb: 2, px: 4 }}>
                                        Análise e Desenvolvimento de Sistemas
                                    </Typography>
                                    <IconButton variant="filled" onClick={handleClose} color='primary' sx={{ position: 'absolute', right: 10 }}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Stack>
                                <Box
                                    sx={(theme: Theme) => ({
                                        flex: '1',
                                        overflow: 'auto',
                                        '&::-webkit-scrollbar': {
                                            width: '8px',
                                        },
                                        '&::-webkit-scrollbar-track': {
                                            backgroundColor: theme.palette.background.default,
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            backgroundColor: theme.palette.primary.main,
                                            borderRadius: '4px',
                                        },
                                        '&::-webkit-scrollbar-thumb:hover': {
                                            backgroundColor: theme.palette.primary.dark,
                                        },
                                        scrollbarWidth: 'thin',
                                        scrollbarColor: `${theme.palette.primary.main} ${theme.palette.background.default}`,
                                    })}
                                >
                                    <TableContainer component={Paper}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell><Typography variant="h6">Ordem</Typography></TableCell>
                                                    <TableCell><Typography variant="h6">Unidade Curricular</Typography></TableCell>
                                                    <TableCell><Typography variant="h6">CH</Typography></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {curriculumData.map((item) => (
                                                    <TableRow key={item.ordem}>
                                                        <TableCell>{item.ordem}</TableCell>
                                                        <TableCell>{item.unidadeCurricular}</TableCell>
                                                        <TableCell>{item.ch}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Box>
                        </Modal>
                    </CardContent>
                </Card>

                <Typography variant="h2" sx={{ mb: 2 }}>Cursos e Certificados</Typography>
                <Grid2 container sx={{ height: '50vh' }} spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 8, md: 6 }}>
                        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                            <Typography
                                variant="body1"
                                color="text.primary"
                                sx={{ position: 'absolute', top: '10px', left: '10px' }}
                            >
                                {activeImg} / {certificates.length}
                            </Typography>

                            <StyledIconButton sx={{ left: '8px' }} onClick={() => handleClick('left', false)}>
                                <KeyboardArrowLeftRoundedIcon />
                            </StyledIconButton>

                            <Stack direction="row" sx={{ width: '100%', height: '100%' }}>
                                {certificates.map((certificate, index) => (
                                    index + 1 === activeImg &&
                                    <motion.div
                                        key={index + 1}
                                        initial={{ opacity: 0, x: prevAnimation === 'right' ? -100 : 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 100 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        <ImgWithLoading
                                            src={certificate.src}
                                            alt={certificate.name}
                                            boxProps={{ sx: { borderRadius: '4px', overflow: 'hidden' } }}
                                        // imgProps={{style:{ width: '100%', height: '100%' }}}
                                        />
                                    </motion.div>
                                ))}
                            </Stack>

                            <StyledIconButton sx={{ right: '8px' }} onClick={() => handleClick('right', false)}>
                                <KeyboardArrowRightRoundedIcon />
                            </StyledIconButton>

                            <Stack
                                direction="row"
                                sx={{
                                    position: 'absolute', bottom: '10px',
                                    width: '100%',
                                    justifyContent: 'space-around',
                                    alignItems: 'center'
                                }}
                                divider={<Divider orientation="vertical" sx={{ bgcolor: theme.palette.grey[400], height: '20px' }} />
                                }
                            >
                                {certificates.map((_, index) => (
                                    <Box
                                        key={index + 1}
                                        sx={{
                                            cursor: 'pointer',
                                            width: '12px',
                                            height: '12px',
                                            borderRadius: '50%',
                                            bgcolor: index + 1 === activeImg
                                                ? theme.palette.primary.main
                                                : theme.palette.grey[400],
                                            '&:hover': {
                                                bgcolor: theme.palette.primary.light
                                            }
                                        }}
                                        onClick={() => { setActiveImg(index + 1); setAutoClick(false) }}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 4, md: 6 }}>
                        {certificates.map((certificate, index) => (
                            index + 1 === activeImg &&
                            <motion.div
                                key={index + 1}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Typography align='center' variant="h3">
                                        {certificate.name}
                                    </Typography>
                                    <Typography variant="subtitle1" align='center'>{certificate.organization} | {certificate.horas} horas</Typography>
                                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography align='center' variant="body1" sx={{ mb: 2 }}>
                                            {certificate.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        ))}
                    </Grid2>
                </Grid2>
            </Container>
        </Box >
    )
}

interface StyledIconButtonProps extends IconButtonProps {
    children?: React.ReactNode;
}

const StyledIconButton = styled(({ children, ...props }: StyledIconButtonProps) => (
    <IconButton color='primary' {...props}>
        {children}
    </IconButton>
))(({ theme }) => ({
    backgroundColor: applyOpacity(theme.palette.grey[50], 0.1),
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    '&:hover': {
        backgroundColor: applyOpacity(theme.palette.grey[700], 0.4),
    }
}));


export default Training
