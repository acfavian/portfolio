import styled from "styled-components"

export default function ContentText(props) {
  const {title, textContent} = props
  return (
    <>
      <ContentTextContainer>
        <TitleContentHome>
          {title}
        </TitleContentHome>
        <PContentHome>
          {textContent}
        </PContentHome>
      </ContentTextContainer>
    </>
  )
}

const ContentTextContainer = styled.div`
  width: 100%;
`
const TitleContentHome = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 6px;
`
const PContentHome = styled.p`
  font-size: 1.9rem;
  line-height: 1.5;
  font-weight: 300;
`