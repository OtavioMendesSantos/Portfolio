import React, { createContext, useState, useContext, ReactNode } from 'react';
import CustomThemeProvider from '../styles/CustomThemeProvider';

type ThemeContextType = {
    mode: 'light' | 'dark';
    setMode: (mode: 'light' | 'dark') => void;
};


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            <CustomThemeProvider mode={mode}>
                {children}
            </CustomThemeProvider>
        </ThemeContext.Provider>
    );
}

export const useThemeContext =()=>{
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context  
}
