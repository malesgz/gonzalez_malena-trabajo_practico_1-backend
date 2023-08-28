const {DataTypes, sequelize } = require("../db");

const Comentario = sequelize.define("comentario",
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
        descripcion: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updateDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
);

module.exports = Comentario;