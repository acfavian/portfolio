import styled from "styled-components"

export default function WhatRouteIsBox(props) {
  const { path } = props 
  return (
    <>
      <WhatRouteIsBoxContainer>
        <NamePath>
          Home
        </NamePath>
      </WhatRouteIsBoxContainer>
    </>
  )
}

const WhatRouteIsBoxContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 8px;
  text-align: center;
  margin: 25px auto;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%);
  border: solid 1px rgba(255, 255, 255, 0.6);
  border-radius: 50px;
  
  box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);

`
const NamePath = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
`