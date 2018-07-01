const express = require('express')
const db = require('../db')
const request = require('superagent')
const router = express.Router()

router.get('/', (req, res) => {
  db.getFoods()
    .then(foods => {
        console.log(foods)
      res.json({foods})
    })
})

module.exports = router