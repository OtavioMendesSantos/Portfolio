import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PresentationAvatar from '../../components/Models/PresentationAvatar'
import useResponsive from '../../hooks/useResponsive'
import { Box, Container, Grid2, IconButton, Typography, useTheme } from '@mui/material'
import StacksList from '../../components/StacksList'
import KeyboardDoubleArrowDown from '@mui/icons-material/KeyboardDoubleArrowDown'
import { StyledTypography } from '../../components/Styled/StyledComponents'
import Repositories from '../../components/Sections/Repositories'

const Home = () => {
  const theme = useTheme()
  const { isMobile } = useResponsive()

  return (
    <main>
      <Header position='sticky' />
      <Container
        component="section"
        sx={{
          height: 'calc(100vh - 60px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid2
          container
          sx={{
            height: "100%",
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {!isMobile &&
            <Grid2 sizes={{ xs: 0, sm: 0, md: 6 }} height={"100%"}>
              <PresentationAvatar />
            </Grid2>
          }
          <Grid2
            sizes={{ xs: 12, md: 12 }}
            display="flex"
            flexDirection="column"
          >
            <StyledTypography variant="h1" indicate>Otávio Mendes Santos</StyledTypography>
            <Typography variant="subtitle1">Dev. Front End</Typography>
            <StacksList indicate title='Stacks'
              itens={['react', 'javascript', 'typescript', 'materialui', 'redux']}
            />
            <StacksList indicate title='Contatos'
              itens={['linkedin', 'github', 'twitter']}
            />
          </Grid2>
        </Grid2>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IconButton
            color="primary"
            onClick={() => window.scroll({ top: window.innerHeight - 60, behavior: 'smooth' })}
          >
            <KeyboardDoubleArrowDown />
          </IconButton>
        </Box>
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
        <StyledTypography indicate variant='h1'>Sobre Mim</StyledTypography>
        <StyledTypography indicate variant='h1'>Habilidades</StyledTypography>
        <StyledTypography indicate variant='h1'>Experiência</StyledTypography>
        <StyledTypography indicate variant='h1'>Formação</StyledTypography>
        <StyledTypography indicate variant='h1'>Projetos</StyledTypography>
        <Repositories />
      </Container>
      <Footer />
    </main >
  )
}

export default Home
