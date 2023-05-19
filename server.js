const express = require('express')
const db = require('./config/connection.js')

const {pokemon, reaction, thought} = require('./models')

const PORT = 3001;
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.