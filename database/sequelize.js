const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('sql8759384', 'sql8759384', '3rZGQqP8Ce', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize