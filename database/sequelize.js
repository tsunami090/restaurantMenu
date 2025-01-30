const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('restaurantMenu', 'root', '@Chrisvibe070697000', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize