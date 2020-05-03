import React from 'react';

const Card = ({ pokemonName, pokemonImg, pokemonHeight, pokemonWeight }) => {
    return (
        <>
            <h1>Pokemon</h1>
            <h2>{pokemonName}</h2>
            <div>
            <img src={pokemonImg} alt={pokemonName}/>
            </div>
            <p>El pokemon se llama {pokemonName}, mide {pokemonHeight * 10} cm y pesa {pokemonWeight} kg.</p>
        </>
    )
}

export default Card;