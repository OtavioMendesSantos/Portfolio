import React from 'react'
import Header from '../../components/Header'
import styles from './Home.module.css'
import Footer from '../../components/Footer'
import SendMessage from '../../components/SendMessage'

const Home = () => {
  return (
    <main>
      <Header />
      <section className={styles.presentation}>
        <h1>Otávio Mendes Santos</h1>
        <p>Dev. Front End</p>
        <h2>Stacks</h2>
        
        <h2>Contatos</h2>
        
      </section>
      <main className={styles.container}>
        <section >
        </section>

        {/* <SendMessage /> */}
      </main>

      <Footer />
    </main>
  )
}

export default Home
