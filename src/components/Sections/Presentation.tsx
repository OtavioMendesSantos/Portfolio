import { Box, Grid2, IconButton, Slide } from '@mui/material'
import { StyledTypography as Typography } from '../Styled/StyledComponents'
import KeyboardDoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown'
import StacksList from '../StacksList'
import useResponsive from '../../hooks/useResponsive'
import { motion } from 'framer-motion'

const Presentation = () => {
    const { isMobile } = useResponsive()
    return (
        <Box
            component="section"
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
        >

            <Grid2
                container
                sx={{
                    maxHeight: '100%',
                    height: '100%',
                    width: '100%',
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
                    initial={{ opacity: 0, x: 400 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
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
                                itens={['react', 'javascript', 'typescript', 'materialui', 'redux']}
                            />
                            <StacksList indicate title='Contatos'
                                itens={['linkedin', 'github']}
                            />
                        </Grid2>
                    </Grid2>
                </motion.div>
            </Grid2>
            {/* <Slide in={true} direction="left" timeout={timeAnimation}>
            </Slide> */}

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                <IconButton
                    color="primary"
                    onClick={() => window.scroll({ top: window.innerHeight - 60, behavior: 'smooth' })}
                >
                    <KeyboardDoubleArrowDown />
                </IconButton>
            </Box>
        </Box >
    )
}

export default Presentation