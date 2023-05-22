const router = require('express').Router()
const pokemonRoute = require('./pokemonRoute.js')
const thoughtRoute = require('./thoughtRoute.js')

router.use('/pokemon', pokemonRoute)
router.use('/thought', thoughtRoute)

module.exports = router