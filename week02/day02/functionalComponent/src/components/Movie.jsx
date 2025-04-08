import React from 'react'

const Movie = (props) => {

    const {movieName, releaseYear: year} = props


  return (
    <>
        <h1>Movie</h1>
        {/* <h2>Movie Name: {props.movieName}</h2>
        <h2>Release Year: {props.releaseYear}</h2> */}
                <h2>Movie Name: {movieName}</h2>
                <h2>Release Year: {year}</h2>
    </>
  )
}

export default Movie