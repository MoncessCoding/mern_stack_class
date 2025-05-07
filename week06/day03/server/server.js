const express = require("express") // this means to import express

const app = express() // this means to create an instance express

const port = 8000 // this means to set the port to 8000 which is going to be the base url

//Movies -- CRUD - create, read, update, delete
const movies = [
    {title: "Star Wars", year: 1998},
    {title: "The Matrix", year: 1990},
    {title: "Shrek", year: 2001}
]




app.use(express.json()) // this means to use express.json
app.use(express.urlencoded({extended: true})) // this means to use urlencoded


//Routes 
app.get('/api', (req, res) => {
    res.json({message: "Hello World"})
})

//? Methods

//* Create a movie
app.post('/api/movies', (req, res) => {
    console.log(req.body)
    movies.push(req.body)
    res.json({message: "Created a movie"})
})

//* Get All movies
app.get('/api/movies', (req, res) => {
    res.json({allMovies: movies})
})

//* Get a single move by ID 
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params)
    const movie_id = req.params.id
    res.json(movies[movie_id])
})

//* Update a movie
app.put('/api/movies/:id', (req, res) => {
    const movie_id = req.params.id
    movies[movie_id] = req.body
    res.json({status: "Success"})
})

//* Delete
app.delete('/api/movies/:id', (req, res) => {
    const movie_id = req.params.id
    movies.splice(movie_id, 1)
    res.json({status : "Deleted"})
})





app.listen(port, () => console.log(`Listening to port: ${port}`))