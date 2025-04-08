import { useState } from 'react'
import './App.css'
import Movie from './components/Movie'
import Product from './components/Product'

function App() {

  return (
    <>
      <Movie  movieName = {"Harry Potter"} releaseYear = {1996}/>
      <Product productName = {"Water"} description = {"Just add 3 cups of water"} cost = {"4.99"}/>
    </>
  )
}

export default App
