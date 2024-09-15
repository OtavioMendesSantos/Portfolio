import { Divider, IconButton, Stack, Typography } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface HeaderModalProps {
    title: string
    onClose: any,
}

const HeaderModal = ({ title, onClose }: HeaderModalProps) => {
    return (
        <>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ position: 'relative', p: 2 }}
            >
                <Typography variant="h2" align="center" sx={{ px: 4 }}>
                    {title}
                </Typography>
                <IconButton variant="filled" onClick={onClose} color='primary' sx={{ position: 'absolute', right: 10 }}>
                    <CloseRoundedIcon />
                </IconButton>
            </Stack>
            <Divider />
        </>
    )
}

export default HeaderModal