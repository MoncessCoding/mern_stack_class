import './App.css'
import Movie from './components/Movie'
import Product from './components/Product'

function App() {





  return (
    <>
      <Product productName ={"Stanley"} price={"132"} description={"Very expensive water bottle"} inStock ={15}/>

      <Movie movieName = {"Harry Potter"} releaseYear = {"2006"} tickets = {50}/>

    </>
  )
}

export default App
