import { useNavigate } from 'react-router-dom'
import Logo from '/assets/svgs/logo_outlined.svg'
// 
import { AppBar, Box, useTheme } from '@mui/material'
const Header = (
  { position = 'static' }:
    { position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative' }
) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const handleNavigate = () => {
    if (window.location.pathname === '/ds') {
      navigate('/')
    }
    else {
      navigate('/ds')
    }
  }
  return (
    <>
      {position === 'fixed' &&
        <Box
          style={{
            height: '60px',
            backgroundColor: 'background.default',
          }}
        />
      }
      <AppBar
        position={position}
        sx={{
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.background.paper,
        }}
        component="header"
      >
        <Box
            component="img"
            src={Logo}
            alt="Logo Site - Desenvolvedor Otávio"
            onDragStart={(e: DragEvent) => e.preventDefault()}
            onClick={handleNavigate}
            sx={{
              height: '100%',
              width: 'fit-content',
              cursor: 'pointer',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '5px',
              },
            }}
          />
      </AppBar>
    </>
  )
}

export default Header
