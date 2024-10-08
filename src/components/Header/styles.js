import styled from "styled-components";



// CONTAINER

export const Container = styled.div `
    width: 100%;
    max-width: 80%;
    height: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const BuscarInputContainer = styled.div`
    width: 275px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    display:flex;

`
//ROW
export const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`
//COLUMN
export const Column = styled.div`
    display: flex;
    flex-direction: Row;
    align-items: clearInterval;

`
//WRAPPER
export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display:flex;
    justify-content: center;
    align-items: center
`

//MENU
export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
`
//MENURIGHT
export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
`

