import React, {useState} from 'react'

const Movie = (props) => {

    const {movieName, releaseYear, tickets} = props

//          getter       setter
    const [allTickets, setAllTickets] = useState(tickets)

    const handleTicket = () => {
        setAllTickets(allTickets - 1)
    }

  return (
    <div>
        <h1>{movieName}</h1>
        <h2>Release Year: {releaseYear}</h2>

        <h3>Tickets Left: {allTickets}</h3>
        <button onClick={handleTicket}>Buy {movieName} Tickets</button>
    </div>
  )
}

export default Movie