import {
    styled,
    Typography,
    TypographyProps as MuiTypographyProps,
    Theme
} from "@mui/material";

interface CustomTypographyProps extends MuiTypographyProps {
    indicate?: boolean;
}

export const StyledTypography = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'indicate',
    // Esta função é usada para controlar quais props devem ser passadas ao DOM. 
    // Nesse caso, estamos dizendo que a prop indicate não deve ser passada ao DOM. 
    // Isso é importante porque indicate não é um atributo HTML válido, e o React emitiria um aviso se tentássemos passá-lo para o DOM.
})<CustomTypographyProps>(({ theme, indicate }) => ({
    ...(indicate && {
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            left: '-4px',
            bottom: '-6px',
            transform: 'translateY(-50%)',
            width: '15px',
            height: '15px',
            zIndex: -1,
            backgroundColor: (theme as Theme).palette.primary.main,
            borderRadius: '3px'
        },
    })
}))
