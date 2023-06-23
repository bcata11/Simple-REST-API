const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })

}

const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;

    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('email already exists')
        }
        // add studeny to db
        pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
            if (error) throw error;
            res.status(201).send("student created successflly")
            console.log('created')
        })
    })
}


const removeStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudent = !results.rows.length;
        if (noStudent) {
            res.send("student does not exist");
        }
        pool.query(queries.removeStudent, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('student deleted');
        })
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudent = !results.rows.length;
        if (noStudent) {
            res.send("student does not exist");
        } else {
            pool.query(queries.updateStudent, [name, id], (error, results) => {
                if (error) throw error;
                res.status(200).send("student updated");
            })
        }
    })
}


module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
}