import { bannerImagem } from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, TextContent, Title, TitleHighlight } from "./styles";


const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container >
        <Column flex={3}> 
       <Title> Feed </Title>
      <Card/> 
      <Card/> 
      <Card/> 
      <Card/> 
      <Card/> 
        
        </Column>
    <Column flex={1}>
    <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
      <UserInfo percentual={30} nome={"Nanda Leal"} image="https://avatars.githubusercontent.com/u/8728052?v=4&size=64"/>
      <UserInfo percentual={32} nome={"Alexandre Bigolli"} image="https://avatars.githubusercontent.com/u/8728052?v=4&size=64"/>
      <UserInfo percentual={47} nome={"Relson Renchem"} image="https://avatars.githubusercontent.com/u/8728052?v=4&size=64"/>
      <UserInfo percentual={94} nome={"Isabel Mucion"} image="https://avatars.githubusercontent.com/u/8728052?v=4&size=64"/>
    
    
    
    
    </Column>
    </Container>
    </>
  );
};

export { Feed };
