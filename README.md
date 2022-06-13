# Backend-Project

Instructions to run the code :

(i) Download the zip code and extract the files.

(ii) Go to the path "/Backend-Project-main/Backend-Project-main".

(iii) Then run the command "npm install" to install all required libraries.

(iv) Install mongodb compass on your system to use local database.

(v) After all the requirements are fulfilled, run the command 'npm start' to run the code.

(vi) Here are the list of all apis to test the code :

 1. POST '/auth/login' - for login
 2. GET '/admin/teacher' - for getting the list of all teachers
 3. POST '/admin/teacher' - for adding a teacher
 4. DELETE '/admin/teacher/:teacherId' - for deleting a teacher by id
 5. POST '/admin/teacher/:teacherId/class/:classId' - for mapping a teacher to a class
 6. GET '/admin/student' - for getting list of all students
 7. POST '/admin/student' - for adding a student
 8. DELETE '/admin/student/:studentId' - for deleting a student by id
 9. POST '/admin/student/:studentId/class/:classId' - for mapping a student to a class
 10. POST '/admin/class' - for adding a class
 11. POST '/admin/class/:classId' - for updating a class by id
 12. DELETE '/admin/class/:classId' - for deleting a class by id
 13. GET '/teacher/students' - for getting list of students (sorted by name)
 14. POST '/teacher/scorecard/:studentId' - for creating a scorecard by studentId
 15. GET '/teacher/student/ranks' - for getting the ranks of all students
 16. GET '/student/scorecards' - for checking scorecards on all subjects by students
