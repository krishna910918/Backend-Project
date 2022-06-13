const {signin} = require('../controllers/auth');

const express = require('express');

const router = express.Router();

router.post('/auth/login', signin);

module.exports = router;

