import { Box, Divider, Link, Stack, styled, Typography } from '@mui/material'
import { LinkedIn } from '@mui/icons-material'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
// import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import { motion } from 'framer-motion';
import { color } from 'chart.js/helpers';
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
      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 2, flexWrap: 'wrap' }}
      >
        <Link href="https://www.linkedin.com/in/otaviomendessantos/" target="_blank" rel="noreferrer noopen">
          <StyledBox>
            <LinkedIn />
            <Typography>Linkedin</Typography>
          </StyledBox>
        </Link>
        <Link href="mailto:dev.otavioms@gmail.com" target="_blank" rel="noreferrer noopen">
          <StyledBox>
            <EmailIcon />
            <Typography>Gmail</Typography>
          </StyledBox>
        </Link>
        <Link href="https://github.com/OtavioMendesSantos" target="_blank" rel="noreferrer noopen">
          <StyledBox>
            <GitHubIcon />
            <Typography>Github</Typography>
          </StyledBox>
        </Link>
      </Stack>
    </Box>
  )
}

const StyledBox = styled(Box)<{}>
  (({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '.5rem 1rem',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[200],
    color: theme.palette.grey[900],
    borderRadius: '4px',
    transition: 'background-color 0.3s ease, transform 0.3s ease, color 0.3s ease',
    '& svg': {
      color: theme.palette.grey[900],
      fontSize: '2rem',
      transition: 'color 0.3s ease',
      marginRight: '0.2rem',
    },
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
      transform: 'scale(1.05)',
      color: theme.palette.text.primary,
      'svg': {
        color: theme.palette.primary.main,
      },
      'a': {
        color: theme.palette.text.primary,
      },
    },
  }));

export default Footer
