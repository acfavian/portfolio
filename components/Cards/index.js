import styled from "styled-components";

export default function CardPrincipalInfo({children}) {
  return (
    <>
      <CardPrincipalInfoContainer>
        {children}
      </CardPrincipalInfoContainer>
    </>
  )
}

const CardPrincipalInfoContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  width: 95%;
  max-height: 100vh;
  padding: 50px;
  margin: 0 auto;
  background: linear-gradient(172.52deg, rgba(255, 255, 255, 0.10) 0%, rgba(0, 0, 0, 0.20) 100%);
  border: solid 1px rgba(255, 255, 255, 0.6);
  border-radius: 21px;

  backdrop-filter: blur(20px);
`