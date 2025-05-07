import React from 'react'

const AllMovies = ({allMovie}) => {
  return (
    <div>
        <h1>All Movies</h1>
        {
            allMovie.map((movie, idx) => {
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

export default AllMovies