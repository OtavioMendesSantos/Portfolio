import React from 'react'
import Header from '../../components/Header'
import styles from './Home.module.css'
import Footer from '../../components/Footer'
import ExperienceAvatar from '../../components/ExperienceAvatar'

const Home = () => {
  return (
    <main>
      <Header />
      <section className={styles.presentation}>
        <div>
          <ExperienceAvatar />
        </div>
        <div>
          <h1>Otávio Mendes Santos</h1>
          <p>Dev. Front End</p>
          <h2>Stacks</h2>

          <h2>Contatos</h2>
        </div>
      </section>
      <main className={styles.container}>
        <section >
        </section>

      </main>

      <Footer />
    </main>
  )
}

export default Home
