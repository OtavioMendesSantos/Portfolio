import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
// import PresentationAvatar from '../../components/Models/PresentationAvatar'
// import useResponsive from '../../hooks/useResponsive'
import { Box, Container, Fab, useTheme } from '@mui/material'
// import { StyledTypography as Typography } from '../../components/Styled/StyledComponents'
import Repositories from '../../components/Sections/Repositories'
import Skills from '../../components/Sections/Skills'
import Presentation from '../../components/Sections/Presentation'
import Experience from '../../components/Sections/Experience'
import Projects from '../../components/Sections/Projects'
import { handleOpacityColor } from '../../utils/utils'
import Training from '../../components/Sections/Training'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SendMessage from '../../components/Sections/SendMessage'
import NavigateSection from '../../components/common/NavigateSections'

const Home = () => {
  const theme = useTheme()
  // const { isMobile } = useResponsive()
  const refSections = useRef<NodeListOf<Element> | null>(null)
  const [showFaq, setShowFaq] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFaq(window.scrollY > window.innerHeight)
    }

    refSections.current = document.querySelectorAll('.homeSection')

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
          <Repositories className='homeSection' />
          <SendMessage className='homeSection' />
        </Container>
        <Footer />
      </Box>
      <motion.div
        animate={{ opacity: showFaq ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
        <Fab
          color="primary"
          size='small'
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
          aria-label="To top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <KeyboardDoubleArrowUpRoundedIcon />
        </Fab>
      </motion.div>
      <NavigateSection elements={refSections.current} />
    </>
  )
}

export default Home
