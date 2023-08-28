const express = ("express");
const {Router}= require("express");
const router= Router();
const {createUsuario}= require('../controllers/usuario.controllers');

//Crea un usuario.
router.post('/createUsers', createUsuario);

module.exports = router;