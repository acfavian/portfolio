import styled from "styled-components"
import { useContext } from "react"
import { lightTheme, darkTheme, glassTheme } from '../../Themes/themes.js'
import { ThemeContext } from '../../context/ContextTheme'
import { GlassIconComponent, SunIconComponent, MoonIconComponent } from "../Icons/index.js"

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 25px;
`

const ToggleButton = styled.button`
  all: unset;
  cursor: pointer;
`

export default function TogglerTheme() {
  const {theme, themeToggler}  = useContext(ThemeContext)
  return (
    <>
      <ToggleContainer>
        <ToggleButton type="button" onClick={() => themeToggler(glassTheme)}><GlassIconComponent size={30} /></ToggleButton>
        <ToggleButton type="button" onClick={() => themeToggler(darkTheme)}><SunIconComponent size={30} /></ToggleButton>
        <ToggleButton type="button" onClick={() => themeToggler(lightTheme)}><MoonIconComponent size={28} /></ToggleButton>
      </ToggleContainer>
    </>
  )
} 