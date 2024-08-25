import React from 'react'
import { Container, Link, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{
        minHeight: '50vh'
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
    </Container>
  )
}

export default Footer
