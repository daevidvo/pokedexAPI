const express = require('express')
const db = require('./config/connection.js')
const routes = require('./routes/index.js')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)

// waits for the open/creation of the pokemonDB to start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)
    })
})