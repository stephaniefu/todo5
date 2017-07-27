const Sequelize = require('sequelize');
const db = require('../index');

const List = db.define('lists', {
  item: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
})

List.sync();


module.exports = List
