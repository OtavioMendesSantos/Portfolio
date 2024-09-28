import { useEffect, useState } from 'react'
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { motion } from 'framer-motion'
import { Fab } from '@mui/material';

const ToTop = () => {
    const [showFaq, setShowFaq] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const start = viewportHeight;
            const end = documentHeight - viewportHeight * 2;

            const shouldShowFaq = scrollY >= start && scrollY < end;

            setShowFaq(shouldShowFaq);
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.div
            animate={{ opacity: showFaq ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
        >
            <Fab
                color="primary"
                size='small'
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                }}
                aria-label="To top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <KeyboardDoubleArrowUpRoundedIcon />
            </Fab>
        </motion.div>
    )
}

export default ToTop