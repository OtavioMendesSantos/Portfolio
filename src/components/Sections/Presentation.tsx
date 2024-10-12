import { Box, Grid2, IconButton } from '@mui/material'
import { StyledTypography as Typography } from '../Styled/StyledComponents'
import KeyboardDoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown'
import StacksList from '../common/StacksList'
import useResponsive from '../../hooks/useResponsive'
import { motion } from 'framer-motion'
import BoxSection from '../common/BoxSection'

const Presentation = ({ className }: { className?: string }) => {
    const { isMobile } = useResponsive()

    const stacksItens = [
        { name: 'react' },
        { name: 'javascript' },
        { name: 'typescript' },
        { name: 'materialui' },
        { name: 'redux' },
    ]

    const contactsList = [
        {
            name: 'github',
            href: 'https://github.com/OtavioMendesSantos',
        },
        {
            name: 'linkedin',
            href: 'https://www.linkedin.com/in/otaviomendessantos//',
        },
        {
            name: 'twitter',
            href: 'https://x.com/OtavioDev',
        },
    ]

    return (
        <BoxSection
            sx={{
                height: 'calc(100vh - 60px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                bgcolor: 'background.default',
                px: isMobile ? 2 : 0,
            }}
            title="Sobre mim"
            className={className}
        >
            <Grid2
                container
                sx={{
                    maxHeight: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* {!isMobile &&
              <Grid2 size={{ xs: 0, sm: 0, md: 6 }} height={"100%"}>
                <PresentationAvatar />
              </Grid2>
            } */}
                <motion.div
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    style={{
                        width: '100%',
                        minHeight: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Grid2
                        container
                        alignItems="center"
                        size={{ xs: 12, md: 12 }}
                        display="flex"
                        flexDirection="column"
                    >
                        <Grid2
                            size={{ xs: 12, sm: 12, md: 6 }}
                            display="flex"
                            flexDirection="column"
                        >
                            <Typography variant="h1" indicate>Otávio Mendes Santos</Typography>
                            <Typography variant="subtitle1">Dev. Front End</Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                Apaixonado por tecnologia, sou um desenvolvedor web júnior em constante aprendizado. Sou um profissional comunicativo e colaborativo, que valoriza o trabalho em equipe e a troca de conhecimento.
                            </Typography>
                            <StacksList indicate title='Stacks'
                                itens={stacksItens}
                            />
                            <StacksList indicate title='Contatos'
                                itens={contactsList}
                            />
                        </Grid2>
                    </Grid2>
                </motion.div>
            </Grid2>
            {/* <Slide in={true} direction="left" timeout={timeAnimation}>
            </Slide> */}

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                <IconButton
                    aria-label='go main page'
                    color="primary"
                    onClick={() => window.scroll({ top: window.innerHeight - 60, behavior: 'smooth' })}
                >
                    <KeyboardDoubleArrowDown />
                </IconButton>
            </Box>
        </BoxSection >
    )
}

export default Presentation