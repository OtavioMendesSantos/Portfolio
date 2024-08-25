import { useState } from 'react'
import { Box, Chip, Collapse, Container, Divider, IconButton, Paper, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Header from '../../components/Header';

const Ds = () => {
    const [collapsedTypography, setCollapsedTypography] = useState(false)
    return (
        <Box>
            <Header />
            <Container>
                <Typography my={2} variant="h1" align="center">Desing Sistem</Typography>
                <Paper
                    sx={{ p: 2, display: 'flex', flexDirection: 'column' }}
                    elevation={3}
                >
                    <Typography my={2} variant="h2" align="center">Tipografia</Typography>
                    <IconButton
                        sx={{
                            margin: 'auto',
                            width: 'fit-content',
                        }}
                        onClick={() => setCollapsedTypography(!collapsedTypography)}
                        color='primary'
                    >
                        {collapsedTypography ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                    <Collapse in={collapsedTypography}>
                        <Divider textAlign='left'>
                            <Chip label='variant = h1' size="small" />
                        </Divider>
                        <Typography my={2} variant="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus?</Typography>

                        <Divider textAlign='left'>
                            <Chip label='variant = h2' size="small" />
                        </Divider>
                        <Typography my={2} variant="h2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus?</Typography>

                        <Divider textAlign='left'>
                            <Chip label='variant = h3' size="small" />
                        </Divider>
                        <Typography my={2} variant="h3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus?</Typography>

                        <Divider textAlign='left'>
                            <Chip label='variant = h4' size="small" />
                        </Divider>
                        <Typography my={2} variant="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus?</Typography>

                        <Divider textAlign='left'>
                            <Chip label='variant = h5' size="small" />
                        </Divider>
                        <Typography my={2} variant="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus?</Typography>

                        <Divider textAlign='left'>
                            <Chip label='variant = h6' size="small" />
                        </Divider>
                        <Typography my={2} variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, accusamus?</Typography>

                        <Divider textAlign='left'>
                            <Chip label='variant = body1' size="small" />
                        </Divider>
                        <Typography my={2} variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti iste hic qui eum vitae ducimus optio enim nostrum est.</Typography>

                        <Divider textAlign='left'>
                            <Chip label='variant = body2' size="small" />
                        </Divider>
                        <Typography my={2} variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti iste hic qui eum vitae ducimus optio enim nostrum est.</Typography>


                        <Divider textAlign='left'>
                            <Chip label='variant = subtitle1' size="small" />
                        </Divider>
                        <Typography my={2} variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti iste hic qui eum vitae ducimus optio enim nostrum est.</Typography>

                        <Divider textAlign='left'>
                            <Chip label='variant = subtitle2' size="small" />
                        </Divider>
                        <Typography my={2} variant="subtitle2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti iste hic qui eum vitae ducimus optio enim nostrum est.</Typography>

                        <Divider textAlign='left'>
                            <Chip label='variant = button' size="small" />
                        </Divider>
                        <Typography my={2} variant="button">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti iste hic qui eum vitae ducimus optio enim nostrum est.</Typography>

                        <Divider textAlign='left'>
                            <Chip label='variant = caption' size="small" />
                        </Divider>
                        <Typography my={2} variant="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti iste hic qui eum vitae ducimus optio enim nostrum est.</Typography>

                        <Divider textAlign='left'>
                            <Chip label='variant = overline' size="small" />
                        </Divider>
                        <Typography my={2} variant="overline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corrupti iste hic qui eum vitae ducimus optio enim nostrum est.</Typography>
                    </Collapse>

                </Paper>
                
            </Container>
        </Box>
    )
}

export default Ds
