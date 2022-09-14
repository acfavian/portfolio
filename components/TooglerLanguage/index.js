import styled from "styled-components"
import { useContext, useEffect } from "react"
import { LanguageContext } from "../../context/LanguageContext"
import { useRouter } from 'next/router'

const heightToggleLanguage = '55px'
const widthToggleLanguage = '110px'
const widthCheckLanguage = '55px'

const ToggleLanguageContainer = styled.div`
  height: ${heightToggleLanguage};
  width: ${widthToggleLanguage};
  --true: rgba(0,0,0);
  position: relative;
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: #fff;
`
const SpanTextEN = styled.span`
  &::before {
    content:"EN"; 
    position: absolute;
    color: #000;
    background-color: #fff;
    font-size: 2.8rem;
    font-weight: 500;
    top: 17%;
    right: 55%;
  }
`
const SpanTextES = styled.span`
  &::before {
    content:"ES"; 
    position: absolute;
    color: #000;
    background-color: #fff;
    font-size: 2.8rem;
    font-weight: 500;
    top: 17%;
    left: 58%;
  }
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  all: unset;
  appearance: none;
  height: ${heightToggleLanguage};
  width: ${widthToggleLanguage};
  background-color: transparent;
  border-radius: .2em;
  cursor: pointer;
  text-align: center;

  &::after {
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    content: 'ES';
    color: #fff;
    background-color: var(--true);
    font-size: 2.8rem;
    font-weight: 500;
    top: 50%;
    
    height: calc((${heightToggleLanguage} - .1em));
    width: ${widthCheckLanguage};

    border: 1px solid #fff;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    
    left: calc(75% - (${widthCheckLanguage} + 0.1em)/2);
    
    transform: translate(0%, -50%);
    transition: .3s ease;
  }

  &:checked::after {
    content: 'EN';
    color: #fff;
    background-color: var(--true);
    font-size: 2.8rem;
    font-weight: 500;
    
    border: 1px solid #fff;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    
    left: calc(0% - calc((${widthCheckLanguage} + 0.1em)/2));

    transform: translate(50%, -50%);
  }
`

export default function TogglerLanguage() {
  const { language,  languageToggler }  = useContext(LanguageContext)

  return (
    <>
      <ToggleLanguageContainer>
          <SpanTextEN />
          <SpanTextES />
          <HiddenCheckbox
            type="checkbox"
            defaultChecked={language.isCheckedSpanish}
            onClick={(e) => languageToggler(e.target.checked)}
          />
      </ToggleLanguageContainer>
    </>
  )
} 