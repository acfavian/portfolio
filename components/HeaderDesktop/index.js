import Link from "next/link"
import styled from "styled-components"
import TogglerTheme from '../TogglerTheme'
import TogglerLanguage from "../TooglerLanguage"

const HeaderContainerDesktop = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc((${props => props.widthProject || "100%"}) - (${props => props.marginLeft || 'var(--width-sidebar-mini)'}) - 60px);
  
  margin: 0 calc(30px + (${props => props.marginLeft || 'var(--width-sidebar-mini)'}));
  padding: 20px 50px;
  height: var(--height-header-desktop);

  border: solid 2px rgba(255, 255, 255, 0.6);
  border-top: 0px;
  border-right-color: rgba(238, 238, 238, 0.5);
  border-left-color: rgba(238, 238, 238, 0.5);

  border-bottom-left-radius: 21px ;
  border-bottom-right-radius: 21px;

  box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.25);

  mix-blend-mode: ${props => props.theme.sidebarMixBlendMode};
  backdrop-filter: blur(10px);
  z-index: 10;
`

const UlRouting = styled.ul`
  list-style: none;
`
const LiRouting = styled.li`
  font-size: 2rem;
  font-weight: 600;
`

export default function HeaderDesktop ({ marginLeft, widthProject }) {

  return (
    <>
      <HeaderContainerDesktop marginLeft={marginLeft} widthProject={widthProject}>

          <TogglerTheme />
          <TogglerLanguage />
          <nav>
            <UlRouting>
              <Link href="/projects"><LiRouting>Projects</LiRouting></Link>
            </UlRouting>
          </nav>

      </HeaderContainerDesktop>
    </>
  )
}