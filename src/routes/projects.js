const express = require('express')
const router = express.Router()

const projectsController = require('../controllers/projectsControllers.js')

router.get('/', projectsController.list)

router.get('/detail/:id?', projectsController.detail)

module.exports = router
