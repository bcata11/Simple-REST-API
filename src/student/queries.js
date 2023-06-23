const getStudents = 'select * from students';
const getStudentById = 'select * from students where id = $1';
const checkEmailExists = 'select s from students s where s.email = $1';
const addStudent = 'insert into students ( name, email, age, dob) values ($1, $2, $3, $4)';
const removeStudent = 'delete from students where id = $1';
const updateStudent = 'UPDATE students SET name = $1 WHERE id = $2';

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent,
}