import { Box, useTheme } from '@mui/material'
import { StyledTypography as Typography } from '../Styled/StyledComponents'

const Experience = () => {
    const theme = useTheme()
    return (
        <Box component="section">
            <Typography indicate variant="h1" sx={{ mb: 2 }}>Experiência</Typography>
            <Box
                sx={{
                    borderLeft: `3px solid ${theme.palette.primary.main}`,
                    p: '0 1rem',
                }}
            >
                <Typography variant="h2">Dev. Front End</Typography>
                <Typography variant="caption" sx={{ mb: 2 }}>Pick N Go | Abril 2023 - Atualmente</Typography>
                <Typography variant="h3">Atribuições e responsabilidades</Typography>

                <ul style={{ margin: '0' }}>
                    <li>
                        <Typography variant="body1"><strong>Desenvolvimento de Componentes:</strong> Crio e mantenho componentes reutilizáveis em React, como botões, formulários, barras de navegação e muito mais, para construir uma interface coesa e consistente.</Typography>
                    </li>
                    <li>
                        <Typography variant="body1"><strong>Integração com APIs:</strong> Integro os componentes front-end com os serviços e APIs necessários para acessar dados e funcionalidades do aplicativo.</Typography>
                    </li>
                    <li>
                        <Typography variant="body1"><strong>Colaboração em Equipe:</strong> Trabalho em colaboração com designers de UI/UX, desenvolvedores back-end e outros membros da equipe para garantir que a visão do produto seja implementada com sucesso.</Typography>
                    </li>
                </ul>

            </Box>
        </Box>
    )
}

export default Experience
