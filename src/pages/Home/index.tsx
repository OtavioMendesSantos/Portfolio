import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import PresentationAvatar from '../../components/Models/PresentationAvatar'
// import useResponsive from '../../hooks/useResponsive'
import { Box, Container, useTheme } from '@mui/material'
// import { StyledTypography as Typography } from '../../components/Styled/StyledComponents'
import Repositories from '../../components/Sections/Repositories'
import Skills from '../../components/Sections/Skills'
import Presentation from '../../components/Sections/Presentation'
import Experience from '../../components/Sections/Experience'
import Projects from '../../components/Sections/Projects'

const Home = () => {
  const theme = useTheme()
  // const { isMobile } = useResponsive()
  const timeAnimation = 300

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: theme.palette.background.paper,
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0)',
        backgroundSize: '40px 40px',
        backgroundPosition: '-5px -5px'
      }}
    >
      <Header position='sticky' />
      <Presentation timeAnimation={timeAnimation} />
      <Container
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          minHeight: '100vh',
        }}
      >
        <Skills />
        <Experience />
        {/*        <Typography indicate variant='h1'>Formação</Typography> */}
        <Projects />
        <Repositories />
      </Container>
      <Footer />
    </Box>
  )
}

export default Home
