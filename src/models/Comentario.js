const {DataTypes, sequelize } = require("../db");

const Comentario = sequelize.define("Comentario",
    {
        id_Comentario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
    {
        tableName: "Comentario",
    }
);

Comentario.sync();

module.exports = Comentario;