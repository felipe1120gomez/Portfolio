const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blogControllers.js')

router.get('/glauser', blogController.glauser)

router.get('/gambo', blogController.gambo)

router.get('/itjobs', blogController.itjobs)

module.exports = router
