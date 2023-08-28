const { default: Producto } = require('../models/Producto');
const Producto = require('../models/Producto');
const ctrl = {};

  PostrCtr.createProducto = async (req, res) => {
    const { categoria, nombre, precio } = req.body;
    try {
        const existeProducto = await Producto.findOne({
            where: {
              nombre,
            },
        });
        if(existeProducto){
            throw {
                status: 400,
                message: "Este producto ya existe",
            };
        }
      const nuevoProducto = new Producto({
        categoria,
        nombre,
        precio
      });

    //Producto guardado.
    return res.status(201).json({
        message: "El producto fue guardado exitosamente",
    });    
      
    }catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          message: error.message || "No se pudo crear el producto.",
        });
    }
};
  

  //Traer todos los productos en una lista.
  PostrCtr.getProducto = async (req, res) => {
    try {
      const producto = await Producto.findAll({
        include: usuario,
        order: [['createdAt', 'ASC']]
      });
      if (!usuario) {
        throw {
          status: 404,
          message: "No se encontraro el producto solicitado.",
        };
      }
      res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json({
          message: error.message || "Error al obtener este producto.",
        });
      }
  };


  //Traer un solo producto.
  PostrCtr.getProductoById = async (req, res) => {
    try {
      const ProductoId = req.params.id;
      const Producto = await Producto.findByPk(postId, {
        include: nombreUsurio // Incluye los datos del usuario asociado a la publicación
      });
      if (!post) {
        return res.status(404).json({ error: 'No se encontro el producto especificado.' });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: 'Error al solicitar producto.' });
    }
  }


  //EDITAR POST
  PostrCtr.updatePost = async (req, res) => {
    try {
      const postId = req.params.id;
      const { title, content , fecha_creacion } = req.body;

      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post no Encontrado' });
      }

      await post.update({ title, content , fecha_creacion  });
      res.status(200).json({
        message: 'Post editado correctamente',
        updatedPost})

    } catch (error) {
      res.status(500).json({ error: 'Error al Editar el  post' });
    }
  }

  //ELIMINAR POST
  PostrCtr.deletePost = async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await Post.findByPk(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not encontrado' });
      }

      await post.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error al Eliminar el  post' });
    }
};


module.exports = PostrCtr;