import styled from "styled-components"
import { SocialMediaContainer } from "../Sidebar/SocialMediaContainer"
import { personalData } from '../../Language/index'
import Link from "next/link"

const SidebarContainer = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  
  padding: 30px 20px;

  width: var(--width-sidebar-mini);
  background: linear-gradient(172.52deg, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.20) 100%);
  
  border: solid 1px;
  border-top: 0px;
  border-left: 0px;
  border-bottom: 0px;
  border-right-color: rgba(255, 255, 255, 0.8);

  box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.25);

  backdrop-filter: blur(20px);
  z-index: 11;
`

const NameDevMini = styled.h1`
  cursor: pointer;
  font-size: 2.2rem;
  font-weight: 600;
  align-self: center;
  
  transform: rotate(180deg);
  white-space: nowrap;
  writing-mode: vertical-rl;
  letter-spacing: 1px;
`
export default function SidebarMini () {
  return (
    <>
      <SidebarContainer>
        <Link href={'/'}>
          <NameDevMini>{personalData.name}</NameDevMini>
        </Link>
        <SocialMediaContainer 
          flexDirection={"column"}
          height={"160px"}
          sizeIcon={38}
        />
        <a 
          target='_blank'
          href="https://google.com"
        >
          <NameDevMini>See CV</NameDevMini>
        </a>
        
      </SidebarContainer>
    </>
  )
}