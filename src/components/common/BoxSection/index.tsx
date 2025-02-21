import { Box, BoxProps } from '@mui/material'

interface BoxSectionProps extends BoxProps {
    title: string;
    className?: string;
}

const BoxSection = ({ title, className, ...props }: BoxSectionProps) => {
    return (
        <Box 
            className={className}
            data-section-name={title}
            {...props}
            component="section"
        >
            {props.children}
        </Box>
    )
}

export default BoxSection
