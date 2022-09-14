import styled from "styled-components";
import { FrontendIconsTools } from "./FrontendIconsTools";
import { BackendIconsTools } from "./BackendIconsTools";

export default function ReelWebTools({ nameCategoryTools, isFrontendTools, isBackendTools }) {

  return (
    <>
      <ReelWebToolsContainer> 
        <TitleCategoryTools>
          {nameCategoryTools}
        </TitleCategoryTools>
        <ReelIconsContainer>
          {isFrontendTools && <FrontendIconsTools />}
          {isBackendTools && <BackendIconsTools />}
        </ReelIconsContainer>
      </ReelWebToolsContainer>
    </>
  )  
}

const ReelWebToolsContainer = styled.div`
  width: 100%;
  height: fit-content;
`
const TitleCategoryTools = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 15px;
`
const ReelIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  gap: 21px;
`

