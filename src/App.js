import React, { useState, useEffect } from 'react';
import Button from './components/Button'
import Card from './components/Card'
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState("charmander")

   console.log(pokemon)

  const handleClick = e => {
    setSelectedPokemon(e.target.id)
    console.log(selectedPokemon)
  }

  console.log(pokemon.sprites && pokemon.sprites.front_default)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [selectedPokemon])

  console.log(selectedPokemon)
  console.log(pokemon.name)


  return (
    <div className="App">
      <Card pokemonName={selectedPokemon} pokemonImg={pokemon.sprites && pokemon.sprites.front_default} pokemonHeight={pokemon.height && pokemon.height} pokemonWeight={pokemon.weight && pokemon.weight}/>
      <Button id={"charmander"} name={"Charmander"} handleClick={handleClick} />
      <Button id={"squirtle"} name={"Squirtle"} handleClick={handleClick} />
      <Button id={"bulbasaur"} name={"Bulbasaur"} handleClick={handleClick} />
      <Button id={"pikachu"} name={"Pikachu"} handleClick={handleClick} />
    </div>
  );
}

export default App;
