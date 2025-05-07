import React from 'react'

const OneMovie = ({allMovie}) => {
    console.log("FROM OneMovie Component", allMovie)
  return (
    <div>
        <h1>One Movie</h1>
        {
            allMovie.filter(movie => movie.title === "Harry Potter").map((movie, idx) => {
                return (
                    <div key={idx}>
                        <h2>Movie Title: {movie.title}</h2>
                        <h2>Release Year: {movie.year}</h2>
                        <h2>Genre: {movie.genre}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default OneMovie