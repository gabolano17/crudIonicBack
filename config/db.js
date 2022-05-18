const {Sequelize} = require('sequelize');

const db = new Sequelize('crud_ionic', 'root', 'Mariobrosx2021', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db;