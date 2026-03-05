import React, { createContext, useContext } from 'react';
import { useTheme } from './useTheme';

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: any) => {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);