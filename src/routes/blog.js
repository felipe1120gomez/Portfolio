const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blogControllers.js')

router.get('/', blogController.blog)

module.exports = router
