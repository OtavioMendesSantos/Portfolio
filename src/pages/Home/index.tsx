import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ExperienceAvatar from '../../components/ExperienceAvatar'
import useResponsive from '../../hooks/useResponsive'
import { Box, Container, Grid, IconButton, Typography, useTheme } from '@mui/material'
import StacksList from '../../components/StacksList'
import KeyboardDoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown'
const Home = () => {
  const theme = useTheme()
  const { isDesktop } = useResponsive()

  return (
    <main>
      <Header position='fixed' />
      <Container
        component="section"
        sx={{ height: 'calc(100vh - 60px)' }}
      >
        <Grid
          container
          sx={{
            height: "100%",
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isDesktop &&
            <Grid item xs={12} md={6} /* height={isDesktop ? "50%" : "100%"} */>
              <ExperienceAvatar />
            </Grid>
          }
          <Grid
            item xs={12} md={6}
            // height={isDesktop ? "50%" : "100%"}
            display="flex"
            flexDirection="column"
          >
            <Typography variant="h1" indicate>Otávio Mendes Santos</Typography>
            <Typography variant="subtitle1">Dev. Front End</Typography>
            <StacksList title='Stacks'
              itens={['react', 'javascript', 'typescript', 'materialui', 'redux']}
            />
            <StacksList title='Contatos'
              itens={['linkedin', 'github', 'twitter']}
            />

          </Grid>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <IconButton
              color="primary"
              onClick={() => window.scroll({ top: window.innerHeight - 60, behavior: 'smooth' })}
            >
              <KeyboardDoubleArrowDown />
            </IconButton>
          </Box>
        </Grid>
      </Container>
      <Container
        component="section"
        sx={{
          minHeight: '100vh',
          backgroundColor: theme.palette.background.paper,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0)',
          backgroundSize: '40px 40px',
          backgroundPosition: '-5px -5px'
        }}
      >
        <Typography indicate variant='h1'>Sobre Mim</Typography>
        <Typography indicate variant='h1'>Habilidades</Typography>
        <Typography indicate variant='h1'>Experiência</Typography>
        <Typography indicate variant='h1'>Formação</Typography>
        <Typography indicate variant='h1'>Projetos</Typography>
      </Container>
      <Footer />
    </main >
  )
}

export default Home
