import styled from "styled-components";

const MainContainer = styled.main`
  padding-top: ${props => props.paddingTopMobile || 'var(--height-header-desktop)'} ;
  padding-left: ${props => props.paddingleftHome || 'var(--width-sidebar-mini)'} ;
  width: 100%;
  position: relative;
  min-height: 100vh;
`
// const MainBox = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 30px;
//   justify-content: center;
//   padding: 20px 30px 50px 30px;
//   width: 100%;
// `

export default function Main ({children, paddingleftHome}) {
  return (
    <MainContainer paddingleftHome={paddingleftHome}>
      {children}
    </MainContainer>
  )
}