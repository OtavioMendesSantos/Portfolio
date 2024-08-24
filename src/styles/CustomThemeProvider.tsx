import { createTheme, ThemeProvider, Theme } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { deepmerge } from '@mui/utils'

const CustomThemeProvider = (
    { children }: { children: React.ReactNode }
) => {

    const [theme, setTheme] = useState<Theme | null>(null)

    const generateCSS = useCallback((theme: Theme) => {
        return `
            :root {
            --primary-main: ${theme.palette.primary.main};
            --primary-dark: ${theme.palette.primary.dark};
            --primary-contrastText: ${theme.palette.primary.contrastText};
            --primary-light: ${theme.palette.primary.light};
            --secondary-main: ${theme.palette.secondary.main};
            --background-default: ${theme.palette.background.default};
            --background-paper: ${theme.palette.background.paper};
            --text-primary: ${theme.palette.text.primary};
            --text-secondary: ${theme.palette.text.secondary};
            }

            body {
            font-family: ${theme.typography.fontFamily};
            background-color: var(--background-default);
            color: var(--text-primary);
            }

            h1 {
            font-size: ${theme.typography.h1.fontSize};
            font-weight: ${theme.typography.h1.fontWeight};
            }
        `
    }, [])

    useEffect(() => {
        console.log('%cSeja Bem vindo!', 'color: #F25424; font-size: 32px; width: 100%;, text-align: center;')
        const defaultTheme = createTheme({
            palette: {
                mode: 'dark',
                primary: {
                    main: '#F25424'
                },
                secondary: {
                    main: '#454545'
                }
            }
        })
        const CustomTheme = createTheme({

        })
        const finalTheme = createTheme(deepmerge(defaultTheme, CustomTheme))
        setTheme(finalTheme)
        //@ts-ignore
        window.theme = finalTheme
    }, [])

    useEffect(() => {
        if (theme) {
            const styleCustom = document.getElementById('style-css')
            if (styleCustom) document.head.removeChild(styleCustom)
            const cssText = generateCSS(theme)
            const styleCss = document.createElement('style')
            styleCss.id = 'style-css'
            styleCss.innerHTML = cssText
            document.head.appendChild(styleCss)
        }
    }, [theme, generateCSS])

    if (!theme) return

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider
