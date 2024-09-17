import React from "react";
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import {
    Container,
    BuscarInputContainer,
    Row,
    Column,
    Wrapper,
    Input,
    Menu,
    MenuRight,
    UserPicture

} from './styles';

const Header = ( {autenticado}) => {
    return (<>
        <Wrapper>
            <Container>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
            <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>) 

: null}
                <Row>
                    {autenticado ? (< UserPicture src="https://avatars.githubusercontent.com/u/8728052?v=4&size=64"/>) : (<> 
                    
                <MenuRight href="#"> Home </MenuRight>
                
                <Button margin="5px" title="Entrar"/>

                <Button  margin="0 5px" title="Cadastrar"/> </>)}
              
                </Row>
            </Container>


     </Wrapper>        </>     
    )

}
    export {Header}