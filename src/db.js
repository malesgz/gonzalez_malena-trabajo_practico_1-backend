// Se importan las clases de la librería
const { Sequelize, DataTypes, Model } = require("sequelize");
require("dotenv").config();

// Se crea una instancia de la conexión a la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, // localhost
    dialect: process.env.DB_DIALECT, // 'mysql' | 'mariadb' | 'postgres' | 'mssql'
  }
);

// Se exporta la conexión a MySQL, Model y DataTypes para poder usarlas en los modelos
module.exports = {
  sequelize,
  DataTypes,
  Model,
};
