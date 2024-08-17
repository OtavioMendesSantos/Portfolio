import React from 'react'
import style from './SendMessage.module.css'

const SendMessage = () => {
  return (
    <section>
      <h1>Fale Comigo</h1>
      <form className={style.form}>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Mensagem"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default SendMessage
