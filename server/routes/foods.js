const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/ingredients', (req, res) => {
  db.getFoods()
    .then(foods => {
      res.json({foods})
    })
})

module.exports = router