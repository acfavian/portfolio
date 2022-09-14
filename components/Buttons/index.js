import { ButtonFillContainer, ButtonNoFillContainer } from "./styles"

export function ButtonFill({children}) {
  return (
    <>
      <ButtonFillContainer>
          {children}
      </ButtonFillContainer>
    </>
  )  
}

export function ButtonNoFill({children}) {
  return (
    <>
      <ButtonNoFillContainer>
          {children}
      </ButtonNoFillContainer>
    </>
  )  
}