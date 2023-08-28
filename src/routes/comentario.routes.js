const express = require("express")
const router = express.Router();
const {getProducto,getProductoById,createProducto,updateProducto,deleteProducto} = require('../controllers/producto.controllers');


//Traer los todos los productos.
router.get("/producto", getProducto);

//Un solo producto.
router.get('/producto/:id', getProductoById)

//Ingresa un nuevo producto.
router.post('/createProducto', createProducto);

//Modificar un producto existente.
router.put('/updateProducto/:id', updateProducto);

//Eliminar un producto.
router.delete("/deleteProducto/:id", deleteProducto);

module.exports = router