const {connect, connection} = require('mongoose')
require('dotenv').config()

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/pokedexDB'

connect(connectionString, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
});

module.exports = connection;