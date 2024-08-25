import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ExperienceAvatar from '../../components/ExperienceAvatar'
import useResponsive from '../../hooks/useResponsive'

const Home = () => {

  const { isDesktop } = useResponsive()

  return (
    <main>
      <Header position='fixed' />
      
      {/* <Header /> */}
      <section>
        {isDesktop && <div >
          <ExperienceAvatar />
        </div>}
        <div>
          <h1>Otávio Mendes Santos</h1>
          <p>Dev. Front End</p>
          <h2>Stacks</h2>

          <h2>Contatos</h2>
        </div>
      </section>
      <section>
      </section>
      <Footer />
    </main>
  )
}

export default Home
