import styled from "styled-components";

export const ButtonFillContainer = styled.button`
  all: unset;
  color: black;
  background-color: ${props => props.theme.buttonBgFill};
  padding: 8px;
  border-radius: 8px;
  font-size: 2.3rem;
  font-weight: 800;
  text-align: center;
`
export const ButtonNoFillContainer = styled.button`
  all: unset;
  padding: 8px 0px;
  border-radius: 8px;
  border: solid 1px #fff ;
  text-align: center;
  letter-spacing: 1px;
  font-size: 2.3rem;
  font-weight: 500;
`
