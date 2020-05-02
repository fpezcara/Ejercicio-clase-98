import React from 'react';

const Button = ({handleClick, name, id}) => {
    return(
        <button id={id} onClick={handleClick}>{name}</button>
    )
}

export default Button;