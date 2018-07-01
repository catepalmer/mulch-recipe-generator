const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

function getFoods (testConn) {
  const conn = testConn || connection
  return conn('Foods').select()
}

module.exports = {
    getFoods
}