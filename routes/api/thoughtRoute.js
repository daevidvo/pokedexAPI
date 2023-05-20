const router = require('express').Router();




router.route('/').get().post()
router.route(':thoughtID').get().put().delete()

module.exports = router