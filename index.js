var express = require("express")
var app = express()
const port = 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Server started on ${port}`);
})

let movies = [
    {
        id: 0,
        name: 'Internship',
        year: 2015
    },
    {
        id: 1,
        name: 'Kedarnath',
        year: 2018
    },
    {
        id: 2,
        name: 'Namaste England',
        year: 2018
    }
]
//get movies
app.get('/movie', (req, res) => {
    res.json(movies)
})
//create new movie
app.post('/movie',(req, res) => {
    const newMovie = {
        id: 3,
        name: req.body.name,
        year: req.body.year
    }
    movies.push(newMovie)
    res.send('new movie is added')
})