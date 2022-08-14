const express = require('express');
const route = express.Router()
const statsController = require('../controllers/stats.controller')

route.post('/stats/create', statsController.statsCreate);

module.exports = route
