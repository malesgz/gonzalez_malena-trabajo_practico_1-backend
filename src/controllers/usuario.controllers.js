const Usuario = require('../models/Usuario.js');
const ctrl = {};

userCtr.createUsuario = async (req, res) => {
    const { nombreUsuario, fechaNacimiento, nombre, apellido, correoElectronico, constraseña } = req.body;
      try {
      const existeUsuario = await Usuario.findOne({
        where: {
          nombreUsuario,
        },
      });
  
      if (existeUser) {
        throw {
          status: 400,
          message: "Este usuario existe en la BD",
        };
      }
      const nuevoUsuario = new User({
          nombreUsuario,
          fechaNacimiento,
          nombre,
          apellido,
          correoElectronico,
          constraseña
      });
  
        res.status(201).json(nuevoUsuario);
      } catch (error) {
        res.status(500).json({ error: 'Hay un error para crear este usuario' });
      }
  };
  
  module.exports = userCtr;