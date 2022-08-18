import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
 const [pokemon, setPokemon] = useState([])
 const [input, setInput] = useState("")

 const filteredPokemon = pokemon.filter((mon) => {
  return input === "" || mon.name.includes(input)
 })

 function addPokemon(data) {
    setPokemon([...pokemon, data])
 }

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemon(data))
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search setInput={setInput} input={input}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
