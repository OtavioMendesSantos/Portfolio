import { Box, Button, Container, Grid2, useTheme, Link } from '@mui/material';
import { StyledTypography as Typography } from '../Styled/StyledComponents';
import { Radar } from 'react-chartjs-2';
import { ChartData, ChartOptions, Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { useRef, useState } from 'react';
import { applyOpacity } from '../../utils/utils';
import CustomModal from '../common/Modal';
import ImgWithLoading from '../common/ImgWithLoading';
import BoxSection from '../common/BoxSection';
import smartImage from '/assets/images/smart.png';

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
    level: 9,
    objetivo: 10,
  },
  {
    name: 'JAVASCRIPT',
    level: 8,
    objetivo: 9,
  },
  {
    name: 'REACT',
    level: 8,
    objetivo: 9,
  },
  {
    name: 'TYPESCRIPT',
    level: 8,
    objetivo: 10,
  },
  {
    name: 'GIT',
    level: 6,
    objetivo: 6,
  },
  {
    name: 'REDUX',
    level: 6,
    objetivo: 6,
  },
  {
    name: 'NODEJS',
    level: 4,
    objetivo: 6,
  },
  // {
  //   name: 'REACT NATIVE',
  //   level: 1,
  //   objetivo: 4,
  // },
  // {
  //   name: 'NEXT',
  //   level: 0,
  //   objetivo: 4,
  // },
]

const Skills = ({ className }: { className?: string }) => {
  const chartRef = useRef<Chart<'radar'> | null>(null);
  const [open, setOpen] = useState(false);
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
        label: 'Meta',
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
    plugins: {
      legend: {
        labels: {
          color: theme.palette.primary.contrastText,
          font: {
            size: 14,
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        angleLines: {
          color: theme.palette.divider
        },
        grid: {
          color: theme.palette.divider
        },
        pointLabels: {
          color: theme.palette.primary.contrastText,
          font: {
            size: 14,
          }
        },
        ticks: {
          color: theme.palette.primary.contrastText,
          backdropColor: 'transparent'
        }
      },
    },
  };

  return (
    <BoxSection title='Habilidades' className={className}>
      <Typography indicate variant='h1'>Habilidades</Typography>
      <Container sx={{ height: '100%' }}>
        <Grid2 container sx={{ minHeight: '50vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
              <Button variant='outlined' onClick={() => setOpen(true)}>Como me autoavalio?</Button>
            </Box>
          </Grid2>
        </Grid2>

      </Container>
      <CustomModal open={open} onClose={() => setOpen(false)} title='Como me Autoavalio?' maxWidth="700px">
        <Box>
          <Typography variant="h2">Como me autoavalio?:</Typography>

          <Typography variant="h3" sx={{ m: '1rem 0 .5rem 0' }}>1. Autoavaliação por Critérios Específicos</Typography>
          <Typography variant="body1" sx={{ pl: 2 }}>
            Reflito sobre meus projetos passados e avalio meu desempenho com base nos resultados práticos: <br />
            1-3: Conhecimento básico ou iniciante. <br />
            4-6: Conhecimento intermediário, capaz de aplicar em projetos pequenos. <br />
            7-8: Conhecimento avançado, com experiência sólida. <br />
            9-10: Expertise ou nível de domínio.
          </Typography>

          <Typography variant="h3" sx={{ m: '1rem 0 .5rem 0' }}>2. Avaliação de Feedback Externo</Typography>
          <Typography variant="body1" sx={{ pl: 2 }}>
            Peço feedback a colegas, mentores ou líderes (gerentes, colegas de trabalho, professores) para avaliar minhas habilidades atuais. Isso oferece uma perspectiva externa e equilibra minha autoavaliação.
          </Typography>

          <Typography variant="h3" sx={{ m: '1rem 0 .5rem 0' }}>3. Objetivos de Curto, Médio e Longo Prazo</Typography>
          <Typography variant="body1" sx={{ pl: 2 }}>
            Curto prazo (1-3 meses): Habilidades que desejo melhorar em breve. <br />
            Médio prazo (6 meses - 1 ano): Habilidades que exigem mais prática ou aprendizado. <br />
            Longo prazo (1-2 anos): Habilidades mais complexas ou de nível avançado.
          </Typography>

          {/* <Typography variant="h3" sx={{ m: '1rem 0 .5rem 0' }}>4. Método de Competências Progressivas</Typography>
          <Typography variant="body1" sx={{ pl: 2 }}>
            Framework de aprendizado: Use frameworks de aprendizado progressivo para mapear suas habilidades. Um exemplo é a pirâmide de aprendizado: <br />
            Iniciante: Conhecimento superficial ou básico. <br />
            Praticante: Habilidade em usar a ferramenta ou linguagem em cenários conhecidos. <br />
            Avançado: Capaz de resolver problemas complexos e lidar com desafios. <br />
            Especialista: Capaz de ensinar ou liderar outros na habilidade.
          </Typography> */}

          <Typography variant="h3" sx={{ m: '1rem 0 .5rem 0' }}>4. Modelo SMART para Metas Almejadas</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', maxWidth: '500px', margin: '0 auto 1rem' }}>
            <ImgWithLoading
              src={smartImage}
              alt='Metodologia SMART'
              imgProps={{
                style: { width: '100%', marginTop: '1rem', borderRadius: '.5rem' },
                onDragStart: (e) => e.preventDefault()
              }}
            />
            <Link
              href='https://marqponto.com.br/blog/tecnica-smart-saiba-como-usar/'
              target='_blank'
              variant="caption"
              rel="noreferrer noopen"
            >
              https://marqponto.com.br/blog/tecnica-smart-saiba-como-usar/
            </Link>
          </Box>
          <Typography variant="body1" sx={{ pl: 2 }}>
            Specific (Específico): Determino exatamente qual aspecto da habilidade desejo melhorar. <br />
            Measurable (Mensurável): Como o sucesso pode ser medido? Por exemplo, concluir um projeto ou obter uma certificação. <br />
            Attainable (Atingível): A habilidade é realista considerando meu nível atual e contexto? <br />
            Relevant (Relevante): Como essa habilidade contribui para meus objetivos de carreira ou pessoais? <br />
            Time-bound (Temporal): Em quanto tempo espero atingir esse nível?
          </Typography>

          <Typography variant="h3" sx={{ m: '1rem 0 .5rem 0' }}>5. Benchmarking com o Mercado</Typography>
          <Typography variant="body1" sx={{ pl: 2 }}>
            Pesquiso as expectativas do mercado para as habilidades que desejo desenvolver, ajustando minhas avaliações de acordo com as exigências da minha área de atuação.          </Typography>
        </Box>
      </CustomModal>
    </BoxSection>
  );
};

export default Skills;
