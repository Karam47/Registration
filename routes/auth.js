const express = require('express');
const authController = require('../controllers/auht');
const router = express.Router();

router.post('/register',authController.register);

module.exports = router;