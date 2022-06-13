const {addTeacher, deleteTeacher, mapTeachertoClass, addClass, updateClass, deleteClass, getTeachers, getStudents, addStudent, deleteStudent, mapStudenttoClass } = require('../controllers/admin');
const {authenticated, isAdmin} = require('../middleware/auth');

const express = require('express');

const router = express.Router();

router.get('/admin/teacher', authenticated, isAdmin, getTeachers);
router.post('/admin/teacher', authenticated, isAdmin, addTeacher);
router.delete('/admin/teacher/:teacherId', authenticated, isAdmin, deleteTeacher);
router.post('/admin/teacher/:teacherId/class/:classId', authenticated, isAdmin, mapTeachertoClass );

router.get('/admin/student', authenticated, isAdmin, getStudents);
router.post('/admin/student', authenticated, isAdmin, addStudent);
router.delete('/admin/student/:studentId', authenticated, isAdmin, deleteStudent);
router.post('/admin/student/:studentId/class/:classId', authenticated, isAdmin, mapStudenttoClass );

router.post('/admin/class', authenticated, isAdmin, addClass);
router.post('/admin/class/:classId', authenticated, isAdmin, updateClass);
router.delete('/admin/class/:classId', authenticated, isAdmin, deleteClass);

module.exports = router;