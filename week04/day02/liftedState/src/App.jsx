import './App.css'
import { useState } from 'react'
import MovieForm from './components/MovieForm'
import OneMovie from './components/OneMovie'
import AllMovies from './components/AllMovies'

function App() {

  const [allMovie, setAllMovie] = useState([])


  return (
    <>
      <MovieForm allMovie={allMovie} setAllMovie={setAllMovie}/>
      <OneMovie allMovie={allMovie}/>
      <AllMovies allMovie={allMovie}/>
    </>
  )
}

export default App
