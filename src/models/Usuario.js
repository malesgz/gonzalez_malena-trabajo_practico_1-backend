const {DataTypes, sequelize } = require("../db");

const Usuario = sequelize.define("usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false,
        },
        nombreUsuario: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        correoElectronico: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        contraseña: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
);

module.exports = Usuario;