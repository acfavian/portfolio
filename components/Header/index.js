import useMediaQueryMaxWidth from '../../hooks/useMediaQueryMaxWidth.js'
import HeaderDesktop from "../HeaderDesktop/index.js"
import HeaderPhone from "../HeaderPhone/index.js"

export default function Header ({paddingLeftHome, widthProject}) {
  const isMediaPhone = useMediaQueryMaxWidth(600)
  return (
    <>
      {isMediaPhone ? <HeaderPhone/> : <HeaderDesktop marginLeft={paddingLeftHome} widthProject={widthProject}/>}      
    </>
  )
}