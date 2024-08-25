import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ExperienceAvatar from '../../components/ExperienceAvatar'
import useResponsive from '../../hooks/useResponsive'
import { Container, Grid, Typography } from '@mui/material'
import StacksList from '../../components/StacksList'

const Home = () => {

  const { isDesktop } = useResponsive()

  return (
    <main>
      <Header position='fixed' />
      <Container
      sx={{ height: 'calc(100vh - 60px)' }}
      >
        <Grid
          container
          sx={{
            height:"100%",
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid item xs={12} md={6} height="100%">
            {isDesktop && <ExperienceAvatar />}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" indicate>Otávio Mendes Santos</Typography>
            <Typography variant="subtitle1">Dev. Front End</Typography>
            <StacksList title='Stacks'
              itens={['javascript', 'react', 'typescript', 'materialui', 'redux']}
            />
            <StacksList title='Contatos'
              itens={['linkedin', 'github']}
            />
          </Grid>
        </Grid>
      </Container>
      <section>
      </section>
      <Footer />
    </main >
  )
}

export default Home
