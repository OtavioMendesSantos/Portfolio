import React from 'react'
import style from './Header.module.css'
import logo from '../../../public/assets/images/logo.png'
const Header = () => {
  return (
    <header className={style.header}>
      <img className='img' src={logo} alt="" onDragStart={(e)=>e.preventDefault()}/>
    </header>
  )
}

export default Header
