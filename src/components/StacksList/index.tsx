import { Box, Container, Tooltip } from '@mui/material'
import useResponsive from '../../hooks/useResponsive'
import { StyledTypography } from '../Styled/StyledComponents'

const StacksList = (
  { title, itens, indicate }: { title: string, itens: string[], indicate?: boolean }
) => {
  const { isMobile } = useResponsive()

  return (
    <Box>
      <StyledTypography
        variant="h2"
        indicate={indicate}
      >
        {title}
      </StyledTypography>
      <Container
        component="ul"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          overflow: 'auto',
          padding: 0, // Remove o padding padrão de <ul>
          listStyle: 'none', // Remove a bolinha padrão de <li>
        }}
      >
        {itens.map((item) => (
          <Box key={item} component="li">
            <Tooltip title={item} arrow>
              <Box
                component="img"
                sx={{
                  minWidth: '60px',
                  filter: isMobile ? 'grayscale(0%)' : 'grayscale(10%)',
                  '&:hover': {
                    filter: 'grayscale(0%)',
                    transition: 'filter 0.3s ease',
                  }
                }}
                src={`/svgs/${item}-original.svg`}
                alt={item}
              />
            </Tooltip>
          </Box>
        ))}
      </Container>
    </Box >
  )
}

export default StacksList
