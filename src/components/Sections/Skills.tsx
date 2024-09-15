import { Box, Button, Container, Grid2, useTheme } from '@mui/material';
import { StyledTypography as Typography } from '../Styled/StyledComponents';
import { Radar } from 'react-chartjs-2';
import { ChartData, ChartOptions, Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { useRef } from 'react';
import { applyOpacity } from '../../utils/utils';

// Registra os componentes necessários
Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface SkillData {
  name: string;
  level: number;
  objetivo: number;
}

const skills: SkillData[] = [
  {
    name: 'HTML',
    level: 8,
    objetivo: 8,
  },
  {
    name: 'CSS',
    level: 8,
    objetivo: 10,
  },
  {
    name: 'JAVASCRIPT',
    level: 8,
    objetivo: 9,
  },
  {
    name: 'REACT',
    level: 7,
    objetivo: 9,
  },
  {
    name: 'TYPESCRIPT',
    level: 4,
    objetivo: 8,
  },
  {
    name: 'GIT',
    level: 6,
    objetivo: 8,
  },
  {
    name: 'REDUX',
    level: 5,
    objetivo: 7,
  },
  {
    name: 'REACT NATIVE',
    level: 1,
    objetivo: 8,
  },
  {
    name: 'NODEJS',
    level: 0,
    objetivo: 4,
  },
]

const Skills = () => {
  const chartRef = useRef<Chart<'radar'> | null>(null);
  const theme = useTheme();

  const data: ChartData<'radar'> = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Atual',
        data: skills.map(skill => skill.level),
        backgroundColor: applyOpacity(theme.palette.primary.main, 0.3),
        borderColor: theme.palette.primary.main,
        pointBackgroundColor: applyOpacity(theme.palette.primary.main, 0.1),
      },
      {
        label: 'Objetivo',
        data: skills.map(skill => skill.objetivo),
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
        ticks: {
          display: false
        }
      },
    },
  };

  return (
    <Box component="section">
      <Typography indicate variant='h1'>Habilidades</Typography>
      <Container sx={{ height: '100%' }}>
        <Grid2 container sx={{ minHeight: '50vh' }}>
          <Grid2
            size={{ xs: 12, sm: 12, md: 6 }}
            height={'100%'}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
          >
            <Radar
              ref={chartRef}
              data={data}
              options={options}
              style={{ height: '100%', width: '100%', aspectRatio: '1 / 1' }}
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}
          >
            <Typography variant='body1'>
              <Typography variant='overline'>1-3:</Typography> Conhecimento básico ou iniciante.
            </Typography>
            <Typography variant='body1'>
              <Typography variant='overline'>4-6:</Typography> Conhecimento intermediário, capaz de usar em projetos pequenos.<br />
            </Typography>
            <Typography variant='body1'>
              <Typography variant='overline'>7-8:</Typography> Conhecimento avançado, experiência específica.<br />
            </Typography>
            <Typography variant='body1'>
              <Typography variant='overline'>9-10:</Typography> Expertise ou nível de domínio.<br />
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant='outlined'>Como me autoavalio?</Button>
            </Box>
          </Grid2>
        </Grid2>
        {/* <Typography variant="h2">
          Como me autoavalio?:
        </Typography>
        <Typography variant="body1">
          1. Autoavaliação por Critérios Específicos
          Divida as habilidades em categorias (Ex.: Técnicas, Soft Skills, Ferramentas, Linguagens, Metodologias).
          Critérios de avaliação: Para cada habilidade, defina critérios claros que justifiquem sua pontuação. Por exemplo:
          1-3: Conhecimento básico ou iniciante.
          4-6: Conhecimento intermediário, capaz de usar em projetos pequenos.
          7-8: Conhecimento avançado, experiência sólida.
          9-10: Expertise ou nível de domínio.
          Essa escala ajuda a tornar a avaliação mais objetiva. Você pode criar descrições específicas para cada habilidade e nível.
        </Typography>
        <Typography variant="body1">
          2. Avaliação de Feedback Externo
          Feedback de colegas, mentores ou líderes: Peça a outras pessoas (gerentes, colegas de trabalho, professores) que avaliem suas habilidades atuais. Isso dá uma perspectiva externa e pode equilibrar sua autoavaliação.
          Combine a autoavaliação com a avaliação externa para ajustar sua pontuação final.
        </Typography>
        <Typography variant="body1">
          3. Objetivos de Curto, Médio e Longo Prazo
          Ao pontuar o que você almeja saber, divida os objetivos em:
          Curto prazo (1-3 meses): Habilidades que você deseja melhorar em breve.
          Médio prazo (6 meses - 1 ano): Aquisições de habilidades que vão exigir mais prática ou aprendizado.
          Longo prazo (1-2 anos): Habilidades complexas ou de nível avançado.
          Essa segmentação pode ser exibida no gráfico, mostrando seu progresso e metas ao longo do tempo.
        </Typography>
        <Typography variant="body1">
          4. Autoavaliação por Projetos
          Baseado em projetos ou situações reais: Reflita sobre seus projetos passados e avalie seu desempenho com base nos resultados práticos. Isso pode ser uma forma concreta de definir suas pontuações.
          Para as habilidades que deseja desenvolver, considere o tipo de projeto ou situação em que gostaria de aplicá-las no futuro.
        </Typography>
        <Typography variant="body1">
          5. Método de Competências Progressivas
          Framework de aprendizado: Use frameworks de aprendizado progressivo para mapear suas habilidades. Um exemplo é a pirâmide de aprendizado:
          Iniciante: Conhecimento superficial ou básico.
          Praticante: Habilidade em usar a ferramenta ou linguagem em cenários conhecidos.
          Avançado: Capaz de resolver problemas complexos e lidar com desafios.
          Especialista: Capaz de ensinar ou liderar outros na habilidade.
        </Typography>
        <Typography variant="body1">
          6. Modelo SMART para Metas Almejadas
          Use o modelo SMART para definir os níveis que você deseja alcançar:

          Specific (Específico): Determine exatamente qual aspecto da habilidade você deseja melhorar.
          Measurable (Mensurável): Como você medirá o sucesso? Por exemplo, completar um projeto, obter uma certificação, etc.
          Attainable (Alcançável): A habilidade é realista para seu nível atual e contexto?
          Relevant (Relevante): Como essa habilidade contribui para seus objetivos de carreira ou pessoais?
          Time-bound (Com prazo): Em quanto tempo você espera atingir esse nível?
        </Typography>
        <Typography variant="body1">
          7. Uso de Ferramentas Gráficas
          Sugestão de gráficos:

          Radar Chart (Gráfico de Radar): É ideal para comparar suas habilidades atuais com as metas. Ele destaca facilmente as áreas em que você já é forte e onde precisa melhorar.
          Bar Chart (Gráfico de Barras): Comparar as habilidades em barras lado a lado (habilidade atual vs. almejada).
          Heatmap: Um gráfico de calor pode mostrar a intensidade das habilidades e o quanto você deseja avançar.
        </Typography>
        <Typography variant="body1">
          8. Benchmarking com o Mercado
          Compare-se com padrões do mercado: Pesquise quais são as expectativas do mercado para as habilidades que você deseja desenvolver. Isso ajuda a ajustar suas pontuações de acordo com o que é necessário em sua área de atuação.
        </Typography> */}
      </Container>
    </Box>
  );
};

export default Skills;
