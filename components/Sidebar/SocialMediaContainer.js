import { GitHubIconComponent, LinkedinIconComponent, TwitterIconComponent } from "../Icons"
import styled from "styled-components";

const SocialMediaBox = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  width: 90%;
  justify-content: space-between;
  align-self: center;
  height: ${props => props.height || "auto"};
`

export function SocialMediaContainer({ flexDirection, height, sizeIcon }) {
  return (
    <>
      <SocialMediaBox flexDirection={flexDirection} height={height}>
        <GitHubIconComponent size={sizeIcon || 42} />
        <LinkedinIconComponent size={sizeIcon || 42} />
        <TwitterIconComponent size={sizeIcon || 42} />
      </SocialMediaBox>
    </>
  )
}