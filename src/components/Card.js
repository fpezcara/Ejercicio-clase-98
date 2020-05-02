import React from 'react';

const Card = ({ pokemonName, pokemonImg }) => {
    return (
        <>
            <h1>Pokemon</h1>
            <h2>{pokemonName}</h2>
            <img src={pokemonImg}/>
            <p>El pokemon se llama Charmander, mide 100 cm y pesa 60 kg.</p>
        </>
    )
}

export default Card;