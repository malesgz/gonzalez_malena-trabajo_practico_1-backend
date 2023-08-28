const express = require("express")
const router = express.Router();
const {getPosts,getPostById,createPost,updatePost,deletePost} = require('../controllers/comentario.controllers');


//Todos los POSTS.
router.get("/posts", getPosts);

//Un solo POST por id.
router.get('/post/:id', getPostById)

//Crea POST.
router.post('/createPosts', createPost);

//Actualiza POST.
router.put('/updatePosts/:id', updatePost);

//eliminar POST
router.delete("/deletePosts/:id", deletePost);





module.exports = router