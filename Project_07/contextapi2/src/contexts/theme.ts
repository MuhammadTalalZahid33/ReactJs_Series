import { createContext, useContext } from "react";

// theme Context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})


// theme context provider
export const ThemeProvider = ThemeContext.Provider

// custom hook for easy access over other files
export default function useTheme(){
    return useContext(ThemeContext)
}