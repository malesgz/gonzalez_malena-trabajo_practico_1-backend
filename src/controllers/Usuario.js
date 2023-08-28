import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

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
        }
    },
);

export default Usuario;