import { Box, Container, useTheme } from '@mui/material';
import { StyledTypography as Typography } from '../Styled/StyledComponents';
import { Radar } from 'react-chartjs-2';
import { ChartData, ChartOptions, Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { useRef } from 'react';
import { applyOpacity } from '../../utils/utils';

// Registra os componentes necessários
Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Skills = () => {
  const chartRef = useRef<Chart<'radar'> | null>(null);
  const theme = useTheme();

  const data: ChartData<'radar'> = {
    labels: ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'NODEJS', 'GIT', 'REDUX', 'REACT NATIVE' ],
    datasets: [
      {
        label: 'Atual',
        data: [9, 9, 8, 4, 8, 0, 6, 5, 1],
        backgroundColor: applyOpacity(theme.palette.primary.main, 0.3),
        borderColor: theme.palette.primary.main,
        pointBackgroundColor: applyOpacity(theme.palette.primary.main, 0.1),
      },
      {
        label: 'Objetivo',
        data: [9, 9, 10, 9, 10, 6, 8, 8, 7],
        backgroundColor: applyOpacity(theme.palette.secondary.main, 0.3),
        borderColor: theme.palette.secondary.main,
        pointBackgroundColor: applyOpacity(theme.palette.secondary.main, 0.1),
      },
    ],
  };

  // Opções do gráfico do tipo Radar
  const options: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        ticks:{
          display: false
        }
      },
    },
  };

  return (
    <Box component="section">
      <Typography indicate variant='h1'>Habilidades</Typography>
      <Container sx={{ height: '100%', minHeight: '50vh' }}>
        <Radar
          ref={chartRef}
          data={data}
          options={options}
        />
      </Container>
    </Box>
  );
};

export default Skills;
