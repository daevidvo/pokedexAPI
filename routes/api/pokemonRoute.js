const router = require('express').Router();




router.route('/').get().post()
router.route(':pokemonID').get().put().delete()

module.exports = router