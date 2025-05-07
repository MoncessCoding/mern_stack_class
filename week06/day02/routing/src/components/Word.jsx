import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {

    //Access URL parameters using useParams hook
    const {word, color} = useParams()

  return (
    <div>
        {/* Display dynamic content */}
        <h1 style={{color: color}}>Your word is .. {word} and Your color is {color}</h1>
    </div>
  )
}

export default Word