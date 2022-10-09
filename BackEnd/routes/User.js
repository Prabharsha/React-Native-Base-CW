const express = require('express')
const mysql = require('mysql')
const db = require('../configs/db.configs')
const router = express.Router()

const connection = mysql.createConnection(db.database)

connection.connect(function (err) {
    if (err) {

        console.log(err);
    } else {
        console.log('Connected to the MySQL server');
        var userTableQuery = "CREATE TABLE IF NOT EXISTS users (username VARCHAR(255), password VARCHAR(255))"
        connection.query(userTableQuery, function (err, result) {
            if (err) throw err;
            if (result.warningCount === 0) {
                console.log("User table created!");
            }
        })
    }
})

// router.get('/', (req, res) => {
//     var query = "SELECT * FROM users";
//     connection.query(query, (err, rows) => {
//         if (err) console.log(err)
//         res.send(rows)
//     })
// })

router.post('/', (req, res) => {
    console.log(req.body);
    const username = req.body.username
    const password = req.body.password

    console.log(req.body);
    var query = "INSERT INTO users (username,password) VALUES (?, ?)";

    connection.query(query, [username, password], (err) => {
        if (err) {
            res.send({ 'message': 'duplicate entry' })
        } else {
            res.send({ 'message': 'user created!' })
        }
    })

})

// router.put('/', (req, res) => {
//     const fullName = req.body.fullName
//     const username = req.body.username
//     const password = req.body.password

//     var query = "UPDATE users SET fullName=?, password=? WHERE username=?";

//     connection.query(query, [fullName, password , username], (err, rows) => {
//         if (err) console.log(err);

//         if (rows.affectedRows > 0) {
//             res.send({ 'message': 'user updated' })
//         } else {
//             res.send({ 'message': 'user not found' })
//         }
//         // res.send(rows)
//     })
// })

// router.delete('/:username', (req, res) => {
//     const id = req.params.id

//     var query = "DELETE FROM users WHERE username=?";

//     connection.query(query, [username], (err, rows) => {
//         if (err) console.log(err);

//         if (rows.affectedRows > 0) {
//             res.send({ 'message': 'user deleted' })
//         } else {
//             res.send({ 'message': 'user not found' })
//         }
//     })
// })

router.get('/login/:username/:password', (req, res) => {
    const username = req.params.username;
    const password = req.params.password;

    var query = "SELECT * FROM users WHERE username=? AND password=?";

    connection.query(query, [username, password], (err, row) => {
        if (err) {
            console.log(err);
        } else {
            res.send(row);
        }
    })
})


module.exports = router