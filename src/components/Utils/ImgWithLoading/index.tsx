import { Box, BoxProps, CircularProgress } from "@mui/material";
import { useState } from "react";

interface ImageProps {
    src: string;
    alt: string;
    boxProps?: BoxProps;
    imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

const ImgWithLoading = ({ src, alt, boxProps, imgProps }: ImageProps) => {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    const handleError = () => {
        setLoading(false);
    };

    return (
        <Box
            {...boxProps}
            sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ...boxProps?.sx
            }}
        >
            {loading && <CircularProgress color="primary" />}
            <img
                {...imgProps}
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'all 0.3s ease-in-out',
                    display: loading ? 'none' : 'block', // Oculta a imagem enquanto carrega
                    ...imgProps?.style
                }}
                onLoad={handleLoad}
                onError={handleError} // Adiciona tratamento de erro
            />
        </Box>
    )
}

export default ImgWithLoading
