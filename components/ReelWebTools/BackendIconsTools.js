import { IconContainer, IconName } from "./styles";
import {
  NodejsIconComponent,
  ExpressIconComponent,
  GraphQLIconComponent,
  PostgresqlIconComponent,
  MysqlIconlComponent,
  MongodbIconComponent,
  StrapiIconComponent,
  VercelIconComponent,
  AWSIconComponent,
} from "../Icons";

export function BackendIconsTools() {
  const iconsToolsList = [
    {icon: <NodejsIconComponent />, iconName: "Node.js"},
    {icon: <ExpressIconComponent />, iconName: "Express"},
    {icon: <GraphQLIconComponent />, iconName: "GraphQL"},
    {icon: <PostgresqlIconComponent />, iconName: "PostgreSQL"},
    {icon: <MysqlIconlComponent />, iconName: "MySQL"},
    {icon: <MongodbIconComponent />, iconName: "MongoDB"},
    {icon: <VercelIconComponent />, iconName: "Vercel"},
    {icon: <AWSIconComponent />, iconName: "AWS"},
    {icon: <StrapiIconComponent />, iconName: "Strapi"},
  ]
  return (
    <>
      {iconsToolsList.map((item, index) => <IconContainer key={index}>{item.icon}<IconName>{item.iconName}</IconName></IconContainer>)}
    </>
  )
}
