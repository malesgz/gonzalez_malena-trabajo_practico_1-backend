const { Sequelize, DataTypes } = require('sequelize');

// Nueva instancia de conexión a BD
const Sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    });


const conectarDB = async () => {
    try {
        await Sequelize.authenticate()
        console.log('La base de datos se encuentra conectada');
    } catch (error) {
        console.log('ERROR AL CONECTAR DB: ', error);
    }
};

module.exports = {
    Sequelize,
    DataTypes,
    Model,
}