import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import CustomThemeProvider from '../styles/CustomThemeProvider';

type ThemeContextType = {
    mode: 'light' | 'dark';
    setMode: (mode: 'light' | 'dark') => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Detecta o tema do sistema
    const getSystemTheme = () =>
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const [mode, setMode] = useState<'light' | 'dark'>(getSystemTheme());

    useEffect(() => {
        // Listener para mudanças no tema do sistema
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            setMode(e.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            <CustomThemeProvider mode={mode}>
                {children}
            </CustomThemeProvider>
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
}
