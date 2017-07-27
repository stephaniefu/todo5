const Sequelize = require('sequelize');

const db = new Sequelize('postgres://luqfdnwt:sSjGYM8iVtV5k3BzebJw7c_FgrJ7Cs3S@stampy.db.elephantsql.com:5432/luqfdnwt', {
  dialect: 'sequelize'
});

db.authenticate()
  .then(data => {
    console.log('Successfully connected to DB')
  })
  .catch(err => {
    console.log('Could not connect to DB')
  })

module.exports = db;