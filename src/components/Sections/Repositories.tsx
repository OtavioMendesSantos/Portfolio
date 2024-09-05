import { Box, Button, Card, CardContent, Chip, Container, Link, Stack, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { StyledTypography as Typography } from '../Styled/StyledComponents'
import { GitHubRepos } from '../../Interfaces/GitHubRepos'
import Loader from '../Utils/Loader'
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { applyOpacity } from '../../utils/utils'
const GITHUB_TOKEN: string = import.meta.env.VITE_GITHUB_TOKEN || ''

// interface Filters {
//     owner: boolean;
//     forked: boolean;
// }


const Repositories = () => {
    const username = 'OtavioMendesSantos'
    const [repos, setRepos] = useState<GitHubRepos[]>([])
    const theme = useTheme()
    // const [filters, setFilters] = useState<Filters>({
    //     owner: true,
    //     forked: false
    // })
    const [loadingRepos, setLoadingRepos] = useState(false)

    useEffect(() => {
        async function getUserRepositories() {
            try {
                setLoadingRepos(true)
                const response = await fetch(`https://api.github.com/users/${username}/repos`, {
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN}`,
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
            <Typography variant="h1">Repositórios</Typography>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'stretch',
                    gap: 2,
                }}
            >
                {repos.length > 0 ? (
                    repos.map((repo) => (
                        <Box
                            key={repo.id}
                            sx={{
                                flex: '1 0 200px',
                                minWidth: '200px',
                                maxWidth: '400px',
                                borderRadius: 4,
                                transition: 'all 0.3s ease-in-out',
                                border: `2px solid ${theme.palette.background.default}`,
                                boxSizing: 'border-box',
                                '&:hover': {
                                    backgroundImage: `linear-gradient(163deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                                    borderImage: `linear-gradient(163deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                                    boxShadow: `0px 0px 30px 1px ${applyOpacity(theme.palette.primary.main, 0.3)}`,
                                },
                            }}
                        >
                            <Card sx={{ borderRadius: 4, height: '100%', }}>
                                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Typography
                                        variant="h3"
                                        sx={{ textOverflow: 'ellipsis', overflow: 'hidden', }}
                                    >
                                        {repo.name}
                                    </Typography>
                                    {repo.topics?.length > 0 &&
                                        <Stack direction="row" sx={{ mb: 1, flexWrap: 'wrap', gap: 0.5 }} useFlexGap>
                                            {repo.topics?.map((topic) => (
                                                <Chip key={topic} label={topic} size="small" sx={{ mr: 1 }} />
                                            ))}
                                        </Stack>
                                    }
                                    <Typography variant="body2">
                                        {repo.description ? repo.description : 'Sem descrição'}
                                    </Typography>
                                    <Link
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant={'body1'}
                                    >
                                        <Button>
                                            Visitar repositório <LaunchRoundedIcon fontSize="inherit" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </ Box>
                    ))
                ) : (
                    <Box sx={{ display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                        <Loader />
                        {loadingRepos
                            ? <Typography variant="body1">Carregando repositórios...</Typography>
                            : null
                        }
                    </ Box>
                )}
            </Container>

        </Box >
    )
}

export default Repositories