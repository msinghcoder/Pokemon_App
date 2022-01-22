import react from 'react';
import logo from './pokemon.png';
import './App.css';
import { Pokemons } from './pokemon-list';

function App() {
  return (
    <div className="App">
      <h2>Pokemon Data </h2>
      {/* rendering pokemons list */}
      <Pokemons />


    </div>
  );
}

export default App;
