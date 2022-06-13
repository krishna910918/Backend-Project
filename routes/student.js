const express = require('express');
const { getScoreCards } = require('../controllers/student');
const { authenticated, isStudent } = require('../middleware/auth');
const router = express.Router();



router.get('/student/scorecards', authenticated, isStudent, getScoreCards);

module.exports = router;