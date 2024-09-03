import { Box, Card, CardContent, Chip, Container, Link, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { StyledTypography as Typography } from '../Styled/StyledComponents'
import { GitHubRepos } from '../../Interfaces/GitHubRepos'
import Loader from '../Utils/Loader'
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
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
            try{
                setLoadingRepos(true)
                const response = await fetch(`https://api.github.com/users/${username}/repos`)
                if (response.ok) {
                    const data: GitHubRepos[] = await response.json()
                    const ownerRepos = data.filter((repo) => repo.owner.login === username)
                    console.log(ownerRepos);
                    setRepos(data)
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingRepos(false)
            }
        }
        getUserRepositories()
    }, [])

    return (
        <Box>
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
                                minWidth: 'fit-content',
                                maxWidth: '400px',
                                borderRadius: 4,
                                transition: 'all 0.3s ease-in-out',
                                border: `2px solid ${theme.palette.background.default}`,
                                boxSizing: 'border-box',
                                '&:hover': {
                                    backgroundImage: `linear-gradient(163deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                                    borderImage: `linear-gradient(163deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                                    boxShadow: '0px 0px 30px 1px rgb(244, 118, 79, 0.3)',
                                },
                            }}
                        >
                            <Card sx={{ borderRadius: 4, height: '100%' }}>
                                <CardContent sx={{ height: '100%', }}>
                                    <Typography variant="h3" sx={{ minWidth: 'fit-content' }}>{repo.name}</Typography>
                                    {repo.topics?.map((topic) => (
                                        <Chip key={topic} label={topic} size="small" sx={{ mr: 1 }} />
                                    ))}
                                    <Typography variant="body2">
                                        {repo.description ? repo.description : 'Sem descrição'}
                                    </Typography>
                                    <Link
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant={'body1'}
                                    >
                                        Visitar repositório <LaunchRoundedIcon fontSize="inherit" />
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
                        : <Typography variant="body1">Erro Inesperado :)</Typography>}
                    </ Box>
                )}
            </Container>

        </Box >
    )
}

export default Repositories