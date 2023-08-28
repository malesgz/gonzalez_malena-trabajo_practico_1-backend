const { DataTypes, sequelize } = require("./db.js");
const Usuario = require("./models/Usuario.js");
const Producto = require("./models/Producto.js");
const Comentario = require("./models/Comentario.js");
const app = require("./app.js")
require("dotenv").config()
const port = process.env.PORT;

User.hasMany(Producto, { foreignKey: "id_Producto", as: "producto" });
Post.belongsTo(Usuario, { foreignKey: "id_Usuario", as: "usuario" });

Post.hasMany(Comentario, { foreignKey: "id_Comentario", as: "comentario" });
Comment.belongsTo(Producto, { foreignKey: "id_Producto", as: "producto" });

sequelize.models = {
  Comentario,
  Producto,
  Usuario,
};

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas de comentario, producto y comentarios creadas");
  app.listen(port, () => {
    console.log(`Servidor se encuentra en ejecución en http://localhost:${port}`);
  });
});

module.exports = {
  Comentario,
  Producto,
  Usuario,
};