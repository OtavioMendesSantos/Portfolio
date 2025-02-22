import { useNavigate } from 'react-router-dom'
import Logo from '/assets/svgs/logo_outlined.svg'
import { AppBar, Box, Stack, useTheme } from '@mui/material'
import { useState } from 'react'
import { useThemeContext } from '../../../Context/ThemeContext'
import { styled } from '@mui/material/styles'

// Componente Switch personalizado
const StyledSwitch = styled('div')(({ theme }) => ({
  '.switch': {
    fontSize: '14px',
    position: 'relative',
    display: 'inline-block',
    width: '3em',
    height: '1.7em',
    'input': {
      opacity: 0,
      width: 0,
      height: 0,
    }
  },

  '.slider': {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: 'all .3s ease-in-out',
    borderRadius: '30px',
    backgroundColor: theme.palette.grey[200],
    border: `1px solid ${theme.palette.grey[300]}`,

    '&:hover': {
      backgroundColor: theme.palette.grey[300],
      '&:before': {
        backgroundColor: theme.palette.grey[300]
      }
    },

    '&:before': {
      position: 'absolute',
      content: '""',
      height: '1.2em',
      width: '1.2em',
      borderRadius: '50%',
      left: '10%',
      bottom: '15%',
      boxShadow: `inset 8px -4px 0px 0px ${theme.palette.primary.main}`,
      transition: 'all .3s ease-in-out',
      backgroundColor: theme.palette.grey[200],
    }
  },

  'input:checked + .slider': {
    backgroundColor: theme.palette.grey[800],
    border: `1px solid ${theme.palette.grey[700]}`,
    '&:hover': {
      backgroundColor: theme.palette.grey[700],
      transform: 'scale(1.05)',
    },
    '&:before': {
      transform: 'translateX(100%)',
      boxShadow: `inset 15px -4px 0px 15px ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.primary.main,
    }
  },
}));

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
          sx={{
            height: '60px',
            backgroundColor: 'background.default',
            transition: 'background-color .3s ease-in-out',
          }}
        />
      }
      <AppBar
        position={position}
        sx={{
          height: '60px',
          backgroundColor: theme.palette.background.paper,
          transition: 'background-color .3s ease-in-out',
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
          <StyledSwitch sx={{ position: 'absolute', right: '10px' }}>
            <label className="switch">
              <input
                type="checkbox"
                onChange={handleChange}
                checked={darkMode}
                aria-label='Switch Dark Mode'
              />
              <span className="slider" />
            </label>
          </StyledSwitch>
        </Stack>
      </AppBar>
    </>
  )
}

export default Header
