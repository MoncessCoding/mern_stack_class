import React, {useState} from 'react'
import { use } from 'react'

const Form = () => {

//       getter   setter
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [view, setView] = useState('')

    const handleTitle = (e) => {
        console.log(e)
        // console.log(typeof e)
        // console.log(e.target.value)
        setTitle(e.target.value)
    }

    const handleYear = (e) => {
        console.log(e.target.value)
        setYear(e.target.value) 
    }

    const handleView = (e) => {
        console.log(e.target.value)
        setView(e.target.value)
    }

    const createMovie = (e) => {
        e.preventDefault()
        console.log(e)
    }


  return (
    <div>
        <form onSubmit={createMovie}>
            <div>
                <label htmlFor="title">Movie Title:</label>
                <input type="text" name='title' id='' onChange={handleTitle}/>
            </div>
            <div>
                <label htmlFor="year">Release Year:</label>
                <input type="number" name='title' id='' onChange={handleYear}/>
            </div>
            <div>
                <label htmlFor="title">Total views:</label>
                <input type="number" name='title' id='' onChange={handleView}/>
            </div>
            <input type="submit" value= "Add Movie"/>
            {/* <button type='submit'>Add Movie</button> */}
        </form>
        <div>
            <h2>Movie Title: {title}</h2>
            <h2>Release Year: {year}</h2>
            <h2>Total Views: {view}</h2>
        </div>

    </div>
  )
}

export default Form