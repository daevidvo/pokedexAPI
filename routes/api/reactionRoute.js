const router = require('express').Router();


router.route(':thoughtID/reactions').post().delete()

module.exports = router