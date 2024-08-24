import React from 'react'
import Logo from '/svgs/logo_outlined.svg'
// 
import { AppBar, Typography } from '@mui/material'
const Header = (
  {position = 'static'}:
  {position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'}
) => {
  return (
    <AppBar position={position} sx={{
      height: '60px',
    }}>
      {/* <Logo/> */}
      <img src={Logo} alt="" onDragStart={(e)=>e.preventDefault()} style={{height: '100%'}}/>
    </AppBar>
  )
}

export default Header
