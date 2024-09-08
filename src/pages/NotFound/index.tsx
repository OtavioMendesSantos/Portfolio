import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Utils/Loader/Loader'
import { Button, Container } from '@mui/material'
import { StyledTypography } from '../../components/Styled/StyledComponents'

const NotFound = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <Container align="center" sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <StyledTypography variant="h1">
        <StyledTypography variant="inherit" color='primary'>Error 404:</StyledTypography> NotFound
      </StyledTypography>
      <Loader />
      <Button onClick={handleClick}>Navegar Para Home</Button>
    </Container>
  )
}

export default NotFound
