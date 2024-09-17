import React from 'react'

import {ButtonContainer} from './styles';

const Button = ({title, margin, variant = "primary", onClick}) => {

    return (
        <ButtonContainer variant={variant} onClick={onClick} margin={margin}>
        {title}
        
        </ButtonContainer>
   )
}

export {Button}