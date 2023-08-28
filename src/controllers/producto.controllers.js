const ProductoCtrl = {};
const Producto = require("../models/Producto");

// Crear un nuevo producto.
ProductoCtrl.createProducto = async (req, res) => {
  const { categoria, nombre, precio } = req.body;
  try {
    const existeProducto = await Producto.findOne({
      where: {
        nombre,
      },
    });
    if (existeProducto) {
      throw {
        status: 400,
        message: "Este producto ya existe",
      };
    }
    const nuevoProducto = nuevoProducto({
      categoria,
      nombre,
      precio,
    });
    //Producto guardado.
    return res.status(201).json({
      message: "El producto fue guardado exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message || "No se pudo crear el producto.",
    });
  }
};

//Traer todos los productos en una lista.
ProductoCtrl.getProducto = async (req, res) => {
  try {
    const Producto = await Producto.findAll({
      include: usuario,
      order: [["createdAt", "ASC"]],
    });
    if (!usuario) {
      throw {
        status: 404,
        message: "No se encontraro el producto solicitado.",
      };
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message || "Error al obtener este producto.",
    });
  }
};

//Traer un solo producto.
ProductoCtrl.getProductoById = async (req, res) => {
  try {
    const ProductoId = req.params.id;
    const Producto = await Producto.findByPk(ProductoId, {
      include: nombreUsurio,
    });
    if (!Producto) {
      return res
        .status(404)
        .json({ error: "No se encontro el producto especificado." });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Error al solicitar producto." });
  }
};

//Modificar un producto.
ProductoCtrl.updateProducto = async (req, res) => {
  try {
    const ProductoId = req.params.id;
    const { title, content, fecha_creacion } = req.body;

    const Producto = await Post.findByPk(ProductoId);
    if (!Producto) {
      return res
        .status(404)
        .json({ error: "El producto no se pudo encontrar" });
    }
    await Producto.update({ categoria, nombre, precio });
    res.status(200).json({
      message: "Post editado correctamente",
      updatedProducto,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al intentar modificar el producto." });
  }
};

//Eliminar un producto.
ProductoCtrl.deleteProducto = async (req, res) => {
  try {
    const ProductoId = req.params.id;
    const Producto = await Producto.findByPk(ProductoId);
    if (!Producto) {
      return res
        .status(404)
        .json({ error: "El producto no se pudo encontrar" });
    }
    await post.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error al querer borrar el producto." });
  }
};

module.exports = ProductoCtrl;
