import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../components/Main'
import WhatRouteIsBox from '../components/WhatRouteIsBox'
import CardPrincipalInfo from '../components/Cards'
import ReelWebTools from '../components/ReelWebTools'
import ContentText from '../components/ContentText'

import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export default function Home() {
  const { language } = useContext(LanguageContext)

  return (
    <>
      <Head>
        <title>Favian Angarita | portfolio</title>
        <meta name="description" content="Portafolio de Favian H. Angarita | desarrollador web" />
        <link rel="icon" href="/code_icon.ico" />
      </Head>
      
      <Header paddingLeftHome={'var(--width-sidebar)'}/>
      <Sidebar />
      <Main paddingleftHome={'var(--width-sidebar)'}>
        <WhatRouteIsBox />
        <CardPrincipalInfo>
          <ContentText 
            title={language.titleExcerptHome}
            textContent={language.excerptHome} 
          />
          <ReelWebTools 
            nameCategoryTools={"Frontend Tools"}
            isFrontendTools={true} 
          />
          <ReelWebTools 
            nameCategoryTools={"Backend Tools"} 
            isBackendTools={true} 
          />
        </CardPrincipalInfo>
      </Main>
      
    </>
  )
}
