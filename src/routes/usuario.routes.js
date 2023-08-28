const express = ("express");
const {Router}= require("express");
const router= Router();
const {createUser}= require('../controllers/userController');

//Crea usuario.
router.post('/createUsers', createUser);

module.exports = router;