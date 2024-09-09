import { Box, Button, CardContent, Chip, Container, Link, Stack, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { StyledCard, StyledTypography as Typography } from '../Styled/StyledComponents'
import { GitHubRepos } from '../../Interfaces/GitHubRepos'
import Loader from '../Utils/Loader/Loader'
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { applyOpacity } from '../../utils/utils'
import { motion } from 'framer-motion'

// interface Filters {
//     owner: boolean;
//     forked: boolean;
// }


const Repositories = () => {
    const username = 'OtavioMendesSantos'
    const [repos, setRepos] = useState<GitHubRepos[]>([])
    const theme = useTheme()
    const GITHUB_TOKEN: string = import.meta.env.VITE_GITHUB_TOKEN || ''

    // const [filters, setFilters] = useState<Filters>({
    //     owner: true,
    //     forked: false
    // })
    const [loadingRepos, setLoadingRepos] = useState(false)

    useEffect(() => {
        async function getUserRepositories() {
            try {
                if (!GITHUB_TOKEN) throw new Error('Token Ausente')
                setLoadingRepos(true)
                const response = await fetch(`https://api.github.com/users/${username}/repos`, {
                    headers: {
                        'Authorization': `Bearer ${GITHUB_TOKEN}`,
                        Accept: 'application/vnd.github.v3+json'
                    }
                })
                if (response.ok) {
                    const data: GitHubRepos[] = await response.json()
                    setRepos(data)
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingRepos(false)
            }
        }
        getUserRepositories()

        /*   async function getUserRepositories2() {
              try{
                  const response = await fetch('https://api.github.com/users/OtavioMendesSantos')
                  if (response.ok) {
                      const data = await response.json()
                      console.log(data);
                  }
              } catch (error) {
                  console.log(error);
              } finally {
                  setLoadingRepos(false)
              }
          }
          getUserRepositories2()
          
          async function getUserRepositories3() {
              try{
                  const response = await fetch(`https://api.github.com/repos/${username}/Projeto_Autodidata`)
                  if (response.ok) {
                      const data = await response.json()
                      console.log(data);
                  }
              } catch (error) {
                  console.log(error);
              } finally {
                  setLoadingRepos(false)
              }
          }
          getUserRepositories3() 
          async function getUserRepositories34() {
              try{
                  const response = await fetch(`https://api.github.com/repos/${username}/Projeto_Autodidata/commits`)
                  if (response.ok) {
                      const data = await response.json()
                      console.log(data);
                  }
              } catch (error) {
                  console.log(error);
              } finally {
                  setLoadingRepos(false)
              }
          }
          getUserRepositories34()
          */

    }, [])

    return (
        <Box component="section">
            <Typography variant="h1" indicate>Repositórios</Typography>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 3,
                    padding: 2,
                    '@media (max-width: 600px)': {
                        flexDirection: 'column',
                        alignItems: 'center',
                    },
                }}
            >
                {repos.length > 0 ? (
                    repos.map((repo, index) => (
                        <motion.div
                            key={repo.id}
                            style={{ flex: '1', minWidth: '300px', maxWidth: '350px', height: 'min-content' }}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: (index % 2) * 0.2 
                            }}
                        >
                            <StyledCard
                                sx={{
                                    flex: '1 1 300px',
                                    maxWidth: '350px',
                                    minHeight: '250px',
                                    border: `1px solid ${theme.palette.divider}`,
                                    borderRadius: 2,
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        borderColor: theme.palette.primary.main,
                                        boxShadow: `0px 4px 20px ${applyOpacity(theme.palette.primary.main, 0.2)}`,
                                    },
                                }}
                            >
                                <CardContent sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    p: 3,
                                    flex: '1'
                                }}>
                                    <Box>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                mb: 1,
                                                fontWeight: 'bold',
                                                color: theme.palette.text.primary,
                                            }}
                                        >
                                            {repo.name}
                                        </Typography>
                                        {repo.topics?.length > 0 && (
                                            <Stack direction="row" sx={{ mb: 1, flexWrap: 'wrap', gap: 0.5 }} useFlexGap>
                                                {repo.topics?.map((topic) => (
                                                    <Chip key={topic} label={topic} size="small" sx={{ mr: 0.5, fontSize: '0.75rem' }} />
                                                ))}
                                            </Stack>
                                        )}
                                    </Box>
                                    <Typography variant="body1" sx={{ mb: 2 }}>
                                        {repo.description ? repo.description : 'Sem descrição'}
                                    </Typography>
                                    <Link
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ textDecoration: 'none', mt: 'auto' }}
                                    >
                                        <Button sx={{ width: '100%' }} variant="contained" color="primary">
                                            Visitar repositório <LaunchRoundedIcon fontSize="inherit" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </StyledCard>

                        </motion.div>
                    ))
                ) : (
                    <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                        <Loader />
                        {loadingRepos && <Typography variant="body1">Carregando repositórios...</Typography>}
                    </Box>
                )}
            </Container>
        </Box >
    )
}

export default Repositories