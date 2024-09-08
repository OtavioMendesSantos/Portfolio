import { useNavigate } from 'react-router-dom'
import Logo from '/assets/svgs/logo_outlined.svg'
import { AppBar, Box, Stack, Switch, useTheme } from '@mui/material'
import { useState } from 'react'
import { useThemeContext } from '../../Context/ThemeContext'
const Header = (
  { position = 'static' }:
    { position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative' }
) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const { mode, setMode } = useThemeContext()
  const [darkMode, setDarkMode] = useState(mode === 'dark')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMode = (event.target.checked ? 'dark' : 'light')
    setDarkMode(event.target.checked)
    setMode(newMode)
  }

  const handleNavigate = () => {
    navigate(window.location.pathname === '/ds' ? '/' : '/ds');
  };

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
          backgroundColor: theme.palette.background.paper,
        }}
        component="header"
      >
        <Stack
          sx={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
          direction="row"
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
          <Switch sx={{ position: 'absolute', right: '10px' }} onChange={handleChange} checked={darkMode} />
        </Stack>
      </AppBar>
    </>
  )
}

export default Header
