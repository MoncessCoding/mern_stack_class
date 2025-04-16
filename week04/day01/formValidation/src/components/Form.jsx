import React, {use, useState} from 'react'

const Form = () => {

//         getter  setter
    // const [title, setTitle] = useState("")
    // const [number, setNumber] = useState("")
    // const [genre, setGenre] = useState("")

    const [movie, setMovie] = useState({
        title: "",
        year: "",
        genre: ""
    })

    const [allMovie, setAllMovie] = useState([])




    const changeHandler = e => {
        console.log("THIS IS EVENT", e.target.name)
        console.log("THIS IS VALUE", e.target.value)

        console.log("THIS IS OUR MOVIE", movie)
        setMovie({
            ...movie, [e.target.name]: e.target.value
        })
    }


    const movieHandler = e => {
        e.preventDefault()
        setAllMovie([...allMovie, movie])
        setMovie({
            title: "",
            year: "",
            genre: ""
        })

    }


  return (
    <>
        <h1>Create Movie</h1>
        <form onSubmit={movieHandler} action="#">
            <div>
                {
                    //Conditional Render for Validation
                    movie.title.length < 3 && movie.title.length !== 0 ? 
                    //What to do if true? 
                    <p style={{"color": "red"}}>Title must be at least 3 characters</p> : null
                }
                <label htmlFor="title">Movie Title</label>
                <input type="text" name='title' onChange={changeHandler} value={movie.title}/>
            </div>
            <div>
            {
                    //Conditional Render for Validation
                    movie.year < 1890 && movie.year !== "" ? 
                    //What to do if true? 
                    <p style={{"color": "red"}}>Movie must be released after 1890</p> : null
                }
                <label htmlFor="year">Release Year</label>
                <input type="number" name='year' onChange={changeHandler} value={movie.year}/>
            </div>
            <div>
            {
                    //Conditional Render for Validation
                    movie.genre.length < 5 && movie.genre.length !== 0 ? 
                    //What to do if true? 
                    <p style={{"color": "red"}}>Genre must be at least 5 characters</p> : null
                }
                <label htmlFor="genre">Genre</label>
                <input type="text" name='genre'onChange={changeHandler} value={movie.genre}/>
            </div>
            <button>Create Movie</button>
        </form>

    </>
  )
}

export default Form