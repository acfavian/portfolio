import { useContext } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { ThemeContext } from "../../context/ContextTheme"

const GlobalStylesLayout = createGlobalStyle`

`
const LayoutContainer = styled.div`
  min-height: 100vh;
  background-image: ${props => props.theme.bgLayout || ''};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.bodybg};
  color: ${(props) => props.theme.fontColor};
  
`
export default function Layout({ children }) {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <ThemeProvider theme={theme}>
        <LayoutContainer>
          <GlobalStylesLayout />
          {children}
        </LayoutContainer>
      </ThemeProvider>
    </>
  )
}