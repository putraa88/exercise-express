// database
const mysql = require('../config/database');

module.exports = {
  async getAllUsers (req, res, next) {
    mysql.query('SELECT * FROM users', (err, result) => {
      if (err) {
        return res.status(500).json({
          message: 'error in getting all user',
          error: err,
        })
      } else {
        return res.status(200).json({
          message: 'Success get all users',
          data: result,
        })
      }
    })
  },

  async addNewUser (req, res, next) {
    mysql.query(`INSERT INTO users (name, email, password) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}')`, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: 'error in adding new user',
          error: err,
        })
      } else {
        return res.status(201).json({
          message: 'Success add user',
        })
      }
    })
  },

  async getUser (req, res, next) {
    mysql.query(`SELECT * FROM users where id = ${req.params.id}`, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: 'error in getting a user',
          error: err,
        })
      } else {
        if (!result.length) {
          return res.status(404).json({
            message: 'User not found',
          })
        }
        return res.status(200).json({
          message: 'Success get a user',
          data: result
        })
      }
    })
  }
}