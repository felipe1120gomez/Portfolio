const express = require('express')
const router = express.Router()

const aboutController = require('../controllers/aboutControllers.js')

router.get('/', aboutController.about)

module.exports = router
