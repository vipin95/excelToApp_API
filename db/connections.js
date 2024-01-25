const { Sequelize } = require("sequelize");
const db = {};
const { DataTypes } = require("sequelize");

const sequelize = new Sequelize('officeTelicom', 'root', 'India@123', {
    host: 'localhost',
    dialect: 'mysql'
});

async function dbConnectionAuth() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
dbConnectionAuth();

db['sequelize'] = sequelize;
db['Sequelize'] = Sequelize;
db.models = {};
db.models.User = require("./model/user")(sequelize, Sequelize.DataTypes);
module.exports = db;