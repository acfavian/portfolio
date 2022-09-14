import styled from "styled-components"
import { ButtonFill, ButtonNoFill } from "../Buttons"
import { SocialMediaContainer } from './SocialMediaContainer'
import { personalData } from '../../Language/index'

export default function Sidebar () {
  return (
    <>
      <SidebarContainer>

          <TopSidebarContainer>
            <NameDev>{personalData.name}</NameDev>
            <PositionDev>{personalData.positionDev}</PositionDev>
            <SocialMediaContainer />
          </TopSidebarContainer>

          <MiddleSidebar>
            <ContactData>{personalData.email}</ContactData>
            <ContactData>{personalData.phone}</ContactData>
            <ContactData>{personalData.city}</ContactData>
          </MiddleSidebar>

          <BottomSidebar>
            <ButtonNoFill>See CV</ButtonNoFill>
            <ButtonFill>See all projects</ButtonFill>
          </BottomSidebar>

      </SidebarContainer>
    </>
  )
}

const SidebarContainer = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 68px 48px;
  height: 100vh;
  width: var(--width-sidebar);
  mix-blend-mode: ${props => props.theme.sidebarMixBlendMode};

  /* background: linear-gradient(163.75deg, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.30) 100%); */

  border: solid 1px  rgba(255, 255, 255, 0.6);
  border-top: 0px;
  border-left: 0px;
  border-bottom: 0px;
  border-right-color: rgba(255, 255, 255, 0.8);

  box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.25);

  backdrop-filter: blur(20px);
  z-index: 11;
`

const TopSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  
`
const NameDev = styled.h1`
  font-size: 4.6rem;
  font-weight: 600;
  text-align: center;
`
const PositionDev = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
`


const MiddleSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ContactData = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`

const BottomSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`





