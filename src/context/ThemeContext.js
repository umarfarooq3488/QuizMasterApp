import React, { createContext, useContext } from 'react';

// Create the context with default values
const ThemeContext = createContext({
    themeMode: 'light',
    lightMode: () => { },
    darkMode: () => { }
});

// Export the ThemeProvider component
export const ThemeProvider = ThemeContext.Provider

// Export the custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
