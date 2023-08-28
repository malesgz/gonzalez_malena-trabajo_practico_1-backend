import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Producto = sequelize.define("producto", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
});
export default Producto;