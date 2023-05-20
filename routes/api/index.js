const router = require('express').Router()
const pokemonRoute = require('./pokemonRoute.js')
const thoughtRoute = require('./thoughtRoute.js')
const reactionRoute = require('./reactionRoute.js')

router.use('/pokemon', pokemonRoute)
router.use('/thought', thoughtRoute)
router.use('/reaction', reactionRoute)

module.exports = router