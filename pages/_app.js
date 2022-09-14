import '../styles/globals.css'
import { ThemeSelectProvider } from '../context/ContextTheme'
import { LanguageSelectProvider } from '../context/LanguageContext'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LanguageSelectProvider>
        <ThemeSelectProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeSelectProvider>
      </LanguageSelectProvider>
    </>
  )
}

export default MyApp
