import { Box, Fade, Modal, ModalProps, Theme } from '@mui/material'
import HeaderModal from './HeaderModal';

interface CustomModalProps extends ModalProps {
    maxWidth?: string;
    maxHeight?: string;
    title?: string;
}

const CustomModal = ({
    open, onClose, maxWidth = '900px', maxHeight, title, children
}: CustomModalProps) => {

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Fade in={open} timeout={300}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'calc(100% - 32px)',
                    maxWidth: maxWidth,
                    maxHeight: maxHeight ? maxHeight : 'calc(100vh - 64px)',
                    overflowY: 'auto',
                    boxShadow: 24,
                    bgcolor: 'background.paper',
                    borderRadius: '8px',
                    height: maxHeight ? '100%' : 'initial',
                    display: 'flex',
                }}>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '4px',
                        bgcolor: 'background.default',
                        flex: 1
                    }}>
                        {title && <HeaderModal title={title} onClose={onClose} />}
                        <Box sx={(theme: Theme) => ({
                            maxHeight: '100%', overflowY: 'auto', p: 2,
                            '&::-webkit-scrollbar': {
                                width: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: theme.palette.background.default,
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: theme.palette.primary.main,
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                                backgroundColor: theme.palette.primary.dark,
                            },
                            scrollbarWidth: 'thin',
                            scrollbarColor: `${theme.palette.primary.main} ${theme.palette.background.default}`,
                        })}>
                            {children}
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal >
    )
}

export default CustomModal