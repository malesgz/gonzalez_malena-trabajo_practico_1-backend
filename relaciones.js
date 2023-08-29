const { DataTypes, sequelize } = require("./src/db");
const Usuario = require("./src/models/Usuario.js");
const Producto = require("./src/models/Producto.js");
const Comentario = require("./src/models/Comentario.js");
const app = require("./src/app.js");
require("dotenv").config();
const port = process.env.PORT;

Usuario.hasMany(Producto, { foreignKey: "id_usuario", as: "producto" });
Producto.belongsTo(Usuario, { foreignKey: "id_usuario", as: "usuario" });

Producto.hasMany(Comentario, { foreignKey: "id_producto", as: "comentario" });
Comentario.belongsTo(Producto, { foreignKey: "id_producto", as: "producto" });

sequelize.models = {
  Comentario,
  Producto,
  Usuario,
};

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas de comentario, producto y comentarios fueron creadas");
  app.listen(port, () => {
    console.log(`Servidor se encuentra en ejecución en http://localhost:${port}`);
  });
});

module.exports = {
  Comentario,
  Producto,
  Usuario,
};
