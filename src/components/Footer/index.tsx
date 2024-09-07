import { Box, Link, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="section"
      sx={{
        height: 'calc(100vh - 60px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'background.default',
      }}
    >
      <Typography align="center">
        Desenvolvido por
        <Link
          href="https://github.com/OtavioMendesSantos"
          target="_blank"
        >
          @OtavioMendesSantos
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
