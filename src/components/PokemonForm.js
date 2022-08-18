import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
const [nameInput, setNameInput] = useState("")
const [hpInput, setHpInput] = useState("") 
const [frontInput, setFrontInput] = useState("")
const [backInput, setBackInput] = useState("")

function handleNameChange(e) {
  setNameInput(e.target.value)
}

function handleHpChange(e) {
  setHpInput(e.target.value)
}

function handleFrontChange(e) {
  setFrontInput(e.target.value)
}

function handleBackChange(e) {
  setBackInput(e.target.value)
}

  function handleSubmit(e) {
    e.preventDefault();
    let newPokeObj = {
      name: nameInput, 
      hp: hpInput,
      sprites: {
        front: frontInput, 
        back: backInput,
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(newPokeObj),
    })
    .then(r => r.json())
    .then((data) => addPokemon(data))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input value={nameInput} onChange={handleNameChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input value={hpInput} onChange={handleHpChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            value={frontInput}
            onChange={handleFrontChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            value={backInput}
            onChange={handleBackChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
