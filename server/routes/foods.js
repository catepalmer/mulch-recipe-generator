const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/ingredients', (req, res) => {
  db.getFoods()
    .then(foods => {
        console.log('These are the foodses: ' + foods)
      res.json({foods})
    })
})

module.exports = router