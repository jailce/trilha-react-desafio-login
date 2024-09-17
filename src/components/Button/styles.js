import styled, {css} from 'styled-components';


export const ButtonContainer =styled.button`
border-width: 0;
background: #565656;
border-radius: 22px;
position: relative;
color: #fff;
padding: 4px 16px;
min-width: 100px;
width: 100%;
cursor: pointer;
margin: ${props => props.margin ? props.margin : '0'};


${({variant}) => variant !== "primary" && css`


min-width: 167px ;
height : 33px;
background:#e41058;

&::after {
    content: '';
    position: absolute;
    border: 1px solid #e41050;
    top: -5px;
    left: -6px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius: 22px;
    

}

`}

`