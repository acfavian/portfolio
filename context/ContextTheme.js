import { useState, createContext } from 'react';
import { glassTheme } from '../Themes/themes'

export const ThemeContext = createContext()

export const ThemeSelectProvider = ({ children }) => {
  const [theme, setTheme] = useState(glassTheme)
  const themeToggler = (themeSelected) => {
    setTheme(themeSelected)
  }
 
  return (
    <ThemeContext.Provider value={{theme, themeToggler}}>
      {children}
    </ThemeContext.Provider>
  )

}