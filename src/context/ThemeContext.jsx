import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
    
    /*useEffect(() => {
        const classList = document.body.classList;
        classList.toggle('dark', darkMode);
        classList.toggle('light', !darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);*/

    useEffect(() => {
        const theme = darkMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);


    const toggleDarkMode = () => setDarkMode(prev => !prev);

    return (
        <ThemeContext.Provider value={{ toggleDarkMode, darkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext)