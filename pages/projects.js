import Head from "next/head"
import Header from "../components/Header"
import SidebarMini from "../components/SidebarMini"
import Main from "../components/Main"
import ScrollLoopEffectContainer from "../components/ScrollLoopEffectContainer"

export default function Projects () {
  return (
    <>
      <Head>
        <title>Favian Angarita | projects</title>
        <meta name="description" content="Portafolio de Favian H. Angarita | desarrollador web" />
        <link rel="icon" href="/code_icon.ico" />
      </Head>
      
      <Header widthProject={'55%'}/>
      <SidebarMini />

      <Main>
        <ScrollLoopEffectContainer></ScrollLoopEffectContainer>
      </Main>
      
    </>
  )
}