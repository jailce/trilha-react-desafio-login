import React from "react";
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles";

const Card = () => {
    return (<>
    
    
    <CardContainer>
        <ImageBackground src="https://img.freepik.com/vetores-gratis/fundo-de-gradiente-de-linhas-azuis-dinamicas_23-2148995756.jpg?semt=ais_hybrid" />
            <Content>
                <UserInfo>
 
                    <UserPicture src="https://avatars.githubusercontent.com/u/8728052?v=4&size=64"/>
                    <div>
                        <h4> Nanda Leal </h4>
                        <p> Há 4 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para cuso de HTML e CSS</h4>
                    <p>Projeto feito o curso de html e css no bootcamp</p>
                </PostInfo>

                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>icon</p>
                </HasInfo>
            </Content>



    </CardContainer>
    
    
    
    
    
    </>


    )


}




export { Card }