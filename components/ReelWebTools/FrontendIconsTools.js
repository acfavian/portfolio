import { IconContainer, IconName } from "./styles";
import { 
  TypescriptIconComponent, 
  JavascriptIconComponent, 
  HtmlIconComponent,
  NextjsIconComponent,
  ReactIconComponent,
  CSSIconComponent,
  StyledcomponetIconComponent,
  TailwindIconComponent,
  BoostrapIconComponent,
  SASSIconComponent,
  MaterialuiIconComponent,
  PostcssIconComponent,
  WebpackIconComponent,
  ViteIconComponent,
} from "../Icons";

export function FrontendIconsTools() {
  const iconsToolsList = [
    {icon: <HtmlIconComponent />, iconName: "Html5"},
    {icon: <CSSIconComponent />, iconName: "CSS"},
    {icon: <JavascriptIconComponent />, iconName: "Javascript"},
    {icon: <ReactIconComponent />, iconName: "React.js"},
    {icon: <TypescriptIconComponent />, iconName: "Typescript"},
    {icon: <NextjsIconComponent />, iconName: "Next.js"},
    {icon: <WebpackIconComponent />, iconName: "WebPack"},
    {icon: <ViteIconComponent />, iconName: "Vite"},
    {icon: <SASSIconComponent />, iconName: "SASS"},
    {icon: <StyledcomponetIconComponent />, iconName: "Styled"},
    {icon: <TailwindIconComponent />, iconName: "Tailwind"},
    {icon: <MaterialuiIconComponent />, iconName: "MaterialUI"},
    {icon: <BoostrapIconComponent />, iconName: "Boostrap"},
    {icon: <PostcssIconComponent />, iconName: "PostCSS"},
  ]
  return (
    <>
      {iconsToolsList.map((item, index) => <IconContainer key={index}>{item.icon}<IconName>{item.iconName}</IconName></IconContainer>)}
    </>
  )
}

