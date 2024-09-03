import { Box, Card, CardContent, Link } from '@mui/material'
import { useEffect, useState } from 'react'
import { StyledTypography as Typography } from '../Styled/StyledComponents'
import { GitHubRepos } from '../../Interfaces/GitHubRepos'
import Loader from '../Utils/Loader'

// interface Filters {
//     owner: boolean;
//     forked: boolean;
// }

const Repositories = () => {
    const username = 'OtavioMendesSantos'
    const [repos, setRepos] = useState<GitHubRepos[]>([])
    // const [filters, setFilters] = useState<Filters>({
    //     owner: true,
    //     forked: false
    // })

    useEffect(() => {
        async function getUserRepositories() {
            const response = await fetch(`https://api.github.com/users/${username}/repos`)
            if (response.ok) {
                const data: GitHubRepos[] = await response.json()
                const ownerRepos = data.filter((repo) => repo.owner.login === username)
                console.log(ownerRepos);
                setRepos(data)
            }
        }
        getUserRepositories()
    }, [])

    return (
        <Box>
            <Typography variant="h1">Repositórios</Typography>
            {repos.length > 0 ? (
                repos.map((repo) => (
                    <Card key={repo.name} sx={{ marginBottom: 2 }}>
                        <CardContent>
                            <Typography variant="h3">{repo.name}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {repo.description ? repo.description : 'Sem descrição'}
                            </Typography>
                            <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                Visitar repositório
                            </Link>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Loader />
                </ Box>
            )}
        </Box>
    )
}

export default Repositories