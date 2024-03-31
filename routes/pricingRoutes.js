const express = require('express');
const { calculatePrice } = require('../controllers/pricingController');
const router = express.Router();

router.post('/calculate-price', calculatePrice);

module.exports = router;
