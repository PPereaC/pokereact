import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/pokemon_card.jsx';

function App() {
  const [count, setCount] = useState(0)

  const [pokemons, setPokemons] = useState([]);

  function fetchPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => response.json())
      .then((data) => {
        data.results.map((pokemon) => {
          fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemonData) => {
              setPokemons((prevPokemons) => [...prevPokemons, {
                name: pokemonData.name,
                id: pokemonData.id,
                image: pokemonData.sprites.front_default,
                types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
              }]);
            });
        });
      });
  }

  return (
    <>

      <button onClick={fetchPokemons}>Cargar Pokemons</button>

      <h1>Pokémon Cards</h1>

      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </>
  )
}

export default App
