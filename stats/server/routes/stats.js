const express = require('express');
const route = express.Router()
const statsController = require('../controllers/stats.controller')

route.get('/stats/list', statsController.statsList);
route.delete('/stats/reset', statsController.statsReset);


module.exports = route
