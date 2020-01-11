const express = require('express');
const router = express.Router()

const { getRecommendations } = require('../controller/recommendationsController');

router.get('/', getRecommendations);


module.exports = router