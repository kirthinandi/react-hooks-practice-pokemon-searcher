import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const pokemonArr = pokemon.map((obj) => {
    return <PokemonCard key={obj.id} {...obj} />
  })
  
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonArr}
    </Card.Group>
  );
}

export default PokemonCollection;
