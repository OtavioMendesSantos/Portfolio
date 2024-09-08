import { Box, BoxProps, Container, ContainerProps, IconButton, IconButtonProps, styled, Tooltip } from '@mui/material'
import useResponsive from '../../hooks/useResponsive'
import { StyledTypography } from '../Styled/StyledComponents'
import { useEffect, useRef, useState } from 'react'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { applyOpacity } from '../../utils/utils';

const StacksList = (
  { title, itens, indicate, boxProps, containerProps }: {
    title?: string,
    itens: string[],
    indicate?: boolean,
    boxProps?: BoxProps,
    containerProps?: ContainerProps,
  }
) => {
  const { isMobile } = useResponsive()
  const containerRef = useRef<HTMLDivElement>(null)
  const [showArrows, setShowArrows] = useState(true)

  const checkScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      setShowArrows(container.scrollWidth > container.clientWidth);
    }
  };

  useEffect(() => {
    checkScroll(); 
    window.addEventListener('resize', checkScroll);

    return () => window.removeEventListener('resize', checkScroll);
  }, [itens])

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200, // Ajuste esse valor conforme necessário
        behavior: 'smooth'
      });
    }
  }

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200, // Ajuste esse valor conforme necessário
        behavior: 'smooth'
      });
    }
  }

  return (
    <Box>
      {title &&
        <StyledTypography
          variant="h2"
          indicate={indicate}
        >
          {title}
        </StyledTypography>
      }
      <Box sx={{ position: 'relative' }}>
        {showArrows && (
          <StyledIconButton
            sx={{ left: '0' }}
            onClick={handleScrollLeft}
          >
            <KeyboardArrowLeftRoundedIcon />
          </StyledIconButton>
        )}
        <Container
          ref={containerRef}
          component="ul"
          {...containerProps}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            padding: 0,
            overflow: 'hidden',
            listStyle: 'none',
            ...containerProps?.sx
          }}
        >
          {itens.map((item) => (
            <Box
              key={item}
              component="li"
              sx={{
                // flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Tooltip title={isMobile ? '' : item.toUpperCase()} arrow>
                <Box
                  component="img"
                  sx={{
                    maxWidth: '60px',
                    minWidth: '46px',
                    width: isMobile ? '46px' : '100%',
                    filter: isMobile ? 'grayscale(0%)' : 'grayscale(10%)',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      transition: 'filter 0.3s ease',
                    }
                  }}
                  onDragStart={(e: DragEvent) => e.preventDefault()}
                  src={`assets/svgs/${item}-original.svg`}
                  alt={item}
                  {...boxProps}
                />
              </Tooltip>
              {isMobile &&
                <StyledTypography variant="caption">
                  {item.toUpperCase()}
                </StyledTypography>}
            </Box>
          ))}
        </Container>
        {showArrows && (
          <StyledIconButton
            sx={{ right: '0' }}
            onClick={handleScrollRight}
          >
            <KeyboardArrowRightRoundedIcon />
          </StyledIconButton>
        )}
      </Box>
    </Box >
  )
}

interface StyledIconButtonProps extends IconButtonProps {
  children?: React.ReactNode;
}

const StyledIconButton = styled(({ children, ...props }: StyledIconButtonProps) => (
  <IconButton color='primary' {...props}>
    {children}
  </IconButton>
))(({ theme }) => ({
  backgroundColor: applyOpacity(theme.palette.grey[50], 0.1),
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  '&:hover': {
    backgroundColor: applyOpacity(theme.palette.grey[700], 0.4),
  }
}));

export default StacksList
