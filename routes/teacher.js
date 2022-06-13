const express = require('express');
const { getStudents, createScoreCard, getRanks } = require('../controllers/teacher');
const { authenticated, isTeacher } = require('../middleware/auth');
const router = express.Router();

router.get('/teacher/students', authenticated, isTeacher, getStudents);

router.post('/teacher/scorecard/:studentId', authenticated, isTeacher, createScoreCard);

router.get('/teacher/student/ranks', authenticated, isTeacher, getRanks);

module.exports = router;
