import { useState, createContext } from 'react';
import { englishLanguage, espanishLanguage } from '../Language'


export const LanguageContext = createContext()

export const LanguageSelectProvider = ({ children }) => {
  const [language, setLanguage] = useState(englishLanguage)
  
  const languageToggler = (isSpanishLanguage) => {
    isSpanishLanguage ? setLanguage(espanishLanguage) : setLanguage(englishLanguage)
  }

  // const dynamicRoute = useRouter().asPath
  // useEffect(() => languageToggler(isSpanishLanguage), [dynamicRoute])
  
  return (
    <LanguageContext.Provider value={{language, languageToggler}}>
      {children}
    </LanguageContext.Provider>
  )
}