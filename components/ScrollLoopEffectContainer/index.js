import styled from "styled-components"
import { useEffect, useRef, useState } from "react";

export default function ScrollLoopEffectContainer(params) {
  const scrollBoxLeft = useRef()
  const scrollBoxRight = useRef()
  const _preventEvent = false
  const contentLastScrollTop = 0

  const onScrollBoxLeft = (e) => {
    if(_preventEvent) {
      _preventEvent = false
      return
    }
    console.log("onScrollBoxLeft", e.target.scrollTop, e.target.scrollLeft)
    _preventEvent = true
    scrollBoxRight.current.scrollTop = e.target.scrollTop 
  }

  const onScrollBoxRight = (e) => {
    if(_preventEvent) {
      _preventEvent = false
      return
    }
    // if (e.target.scrollTop !== contentLastScrollTop) {
    //   _preventEvent = true
    //   scrollBoxLeft.current.scrollTop = e.target.scrollTop
    //   contentLastScrollTop = e.target.scrollTop -280
    // }
  }

  return (
    <>
      <ScrollLoopEffectBox 
        ref={scrollBoxLeft}
        onScroll={onScrollBoxLeft}
      >
        {["MUUDS","Eromango",
          "GET/Razon",
          "A. Visual / Cartografica"
          ,"Giphy",
          "Miscelanea"].map(item => <TitleSelect>{item}</TitleSelect>)}
      </ScrollLoopEffectBox>

      <ScrollLoopEffectBox2 
        ref={scrollBoxRight}
        onScroll={onScrollBoxRight}
      >
        {["MUUDS","Eromango",
          "GET/Razon",
          "A. Visual / Cartografica"
          ,"Giphy",
          "Miscelanea"].map(item => <TitleSelect hei={"280px"}>{item}</TitleSelect>)}
      </ScrollLoopEffectBox2>
    </>
  )
}

const ScrollLoopEffectBox = styled.div`
  position: absolute;
  top: 50%;
  left: 90px;
  scroll-snap-type: y mandatory;

  padding: auto 20px;
  width: 45%;

  max-height: 120px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll; 
  scroll-behavior: smooth;
`
const ScrollLoopEffectBox2 = styled.div`
  position: absolute;
  top: 0%;
  right: 10px;
  padding: auto 20px;
  width: 45%;
  max-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll; 
  scroll-behavior: smooth;
`
const TitleSelect = styled.h2`
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  font-size: 5rem;
  padding: 0px 20px;
  min-height: ${props => props.hei || "120px"};
`




