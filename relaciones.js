const { DataTypes, sequelize } = require("./src/db");
const Usuario = require("./src/models/Usuario.js");
const Producto = require("./src/models/Producto.js");
const Comentario = require("./src/models/Comentario.js");
const app = require("./src/app.js");
require("dotenv").config();
const port = process.env.PORT;

Usuario.belongsTo(Usuario, { as: "categoriaProducto" });
Producto.hasMany(Producto, { as: "productosEnCategoria" });

Comentario.hasMany(Comentario, {
  foreignKey: "id_Comentario",
  as: "comentario",
});
Producto.belongsTo(Producto, { foreignKey: "id_Producto", as: "producto" });

sequelize.models = {
  Comentario,
  Producto,
  Usuario,
};

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas de comentario, producto y comentarios creadas");
  app.listen(port, () => {
    console.log(
      `Servidor se encuentra en ejecución en http://localhost:${port}`
    );
  });
});

module.exports = {
  Comentario,
  Producto,
  Usuario,
};
