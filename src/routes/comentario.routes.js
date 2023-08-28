const {Router} = require("express");
const express = require('express');
const router = Router();
const {createComentario} = require('../controllers/comentario.controllers');

//Crea un comentario.
router.post('/createComentario', createComentario);
module.exports = router;