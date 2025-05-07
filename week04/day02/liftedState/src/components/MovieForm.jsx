import React, {useState} from 'react'

const MovieForm = ({allMovie, setAllMovie}) => {

const [movie, setMovie] = useState({
        title: "",
        year: "",
        genre: ""
    })

    // const [allMovie, setAllMovie] = useState([])




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
    <div className='row'>
        <h1>Create Movie</h1>
        <form onSubmit={movieHandler} action="#" className='col-md-6 mx-auto'>

            <div className='form-group'>
                {
                    //Conditional Render for Validation
                    movie.title.length < 3 && movie.title.length !== 0 ? 
                    //What to do if true? 
                    <p style={{"color": "red"}}>Title must be at least 3 characters</p> : null
                }
                <label htmlFor="title" className='form-label'>Movie Title</label>
                <input type="text" name='title' onChange={changeHandler} value={movie.title} className='form-control'/>
            </div>

            <div className='form-group'>
            {
                    //Conditional Render for Validation
                    movie.year < 1890 && movie.year !== "" ? 
                    //What to do if true? 
                    <p style={{"color": "red"}}>Movie must be released after 1890</p> : null
                }
                <label htmlFor="year" className='form-label'>Release Year</label>
                <input type="number" name='year' onChange={changeHandler} value={movie.year} className='form-control'/>
            </div>

            <div className='from-group'>
            {
                    //Conditional Render for Validation
                    movie.genre.length < 5 && movie.genre.length !== 0 ? 
                    //What to do if true? 
                    <p style={{"color": "red"}}>Genre must be at least 5 characters</p> : null
                }
                <label htmlFor="genre" className='form-label'>Genre</label>
                <input type="text" name='genre'onChange={changeHandler} value={movie.genre} className='form-control'/>
            </div>
            <button className='btn btn-success mt-3'>Create Movie</button>
        </form>
    </div>
  )
}

export default MovieForm