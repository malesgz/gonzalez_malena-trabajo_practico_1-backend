const {DataTypes, sequelize } = require("../db");

const Producto = sequelize.define("Producto", {
  id_Producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
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
  },
},
    {
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      tableName: "Producto",
    });

Producto.sync();

module.exports = Producto;