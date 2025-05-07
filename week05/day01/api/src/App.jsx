import { useState, useEffect, use } from 'react'
import axios from 'axios'
import './App.css'
import UseEffect from './components/UseEffect'

function App() {

  const [pokemon, setPokemon] = useState([])

  const [tenPokemon, setTenPokemon] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
      console.log("RESPONSE FROM APP.jsx",response.data.name)
      setPokemon(response.data.name)
    })
    .catch(err => {
      console.log(err.data.name)
    })
  }, [])



  const getPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => {
        console.log(response.data.results)
        setTenPokemon(response.data.results)
      })
      .catch(err => {
        console.log(err.data.results)
      })
  }





  return (
    <>
      <h1>API Walk Through</h1>
      <p>{pokemon}</p>


      <p>Click to get 10 pokemons</p>
      <button onClick={getPokemons}>Click Here</button>

      {
        tenPokemon.map((pokemon, idx) => (
          <div key={idx}>
            <p>Pokemon name: {pokemon.name}</p>
          </div>
        ))


        /* tenPokemon.map((pokemon, idx) => {
          return <p>Pokemon name: {pokemon.name}</p>
        }) */

      }


      {/* <UseEffect/> */}
    </>
  )
}

export default App
