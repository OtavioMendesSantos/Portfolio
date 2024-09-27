import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
// import PresentationAvatar from '../../components/Models/PresentationAvatar'
// import useResponsive from '../../hooks/useResponsive'
import { Box, Container, useTheme } from '@mui/material'
// import { StyledTypography as Typography } from '../../components/Styled/StyledComponents'
import Repositories from '../../components/Sections/Repositories'
import Skills from '../../components/Sections/Skills'
import Presentation from '../../components/Sections/Presentation'
import Experience from '../../components/Sections/Experience'
import Projects from '../../components/Sections/Projects'
import { handleOpacityColor } from '../../utils/utils'
import Training from '../../components/Sections/Training'
import { useEffect, useRef, } from 'react'
import SendMessage from '../../components/Sections/SendMessage'
import NavigateSection from '../../components/common/NavigateSections'
import ToTop from '../../components/common/ToTop'

const Home = () => {
  const theme = useTheme()
  const refSections = useRef<NodeListOf<Element> | null>(null)

  useEffect(() => {
    refSections.current = document.querySelectorAll('.homeSection')
  }, [])

  return (
    <>
      <Box
        component="main"
        sx={{
          backgroundColor: theme.palette.background.paper,
          backgroundImage: `radial-gradient(${handleOpacityColor(theme.palette.getContrastText(theme.palette.background.paper), 0.2)} 2px, transparent 0)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '-5px -5px'
        }}
      >
        <Header position='sticky' />
        <Presentation />
        <Container
          component="section"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            minHeight: '100vh',
          }}
        >
          <Skills className='homeSection' />
          <Experience className='homeSection' />
          <Training className='homeSection' />
          <Projects className='homeSection' />          
          <SendMessage className='homeSection' />
          <Repositories className='homeSection' />
        </Container>
        <Footer />
        <ToTop />
      </Box>
      <NavigateSection elements={refSections.current} />
    </>
  )
}

export default Home
