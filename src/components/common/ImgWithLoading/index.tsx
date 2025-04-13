import { Box, BoxProps, CircularProgress } from "@mui/material";
import { useState } from "react";

interface ImageProps {
    src: string;
    alt: string;
    boxProps?: BoxProps;
    imgProps?: React.ComponentProps<"img">;
    href?: string
}

const ImgWithLoading = ({ src, alt, boxProps, imgProps, href }: ImageProps) => {
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
            {href
                ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={src}
                            alt={alt}
                            onLoad={handleLoad}
                            onError={handleError}
                            {...imgProps}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                transition: 'all 0.3s ease-in-out',
                                display: loading ? 'none' : 'block', // Oculta a imagem enquanto carrega
                                ...imgProps?.style
                            }}
                            onClick={imgProps?.onClick}
                        />
                    </a>
                ) : (
                    <img
                        src={src}
                        alt={alt}
                        onLoad={handleLoad}
                        onError={handleError}
                        {...imgProps}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            transition: 'all 0.3s ease-in-out',
                            display: loading ? 'none' : 'block', // Oculta a imagem enquanto carrega
                            ...imgProps?.style
                        }}
                        onClick={imgProps?.onClick}
                    />
                )
            }

        </Box>
    )
}

export default ImgWithLoading
