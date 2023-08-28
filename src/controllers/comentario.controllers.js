const ComentarioCtrl = {};
const Comentario = require('../models/comentario');

  ComentarioCtrl.createComentario= async (req, res) => {
    try {
      const { id_Comentario, descripcion } = req.body;
      const Comentario = await Comentario.findByPk(id_Comentario);
      if (!Comentario) {
        return res.status(404).json({ error: 'El comentario que busca no existe.' });
      }
      const nuevoComentario = await Comentario.create({
        descripcion,
        id_Comentario: id_Comentario
      });
      res.status(201).json(nuevoComentario);
    } catch (error) {
      res.status(500).json({ error: 'El comentario no pudo publicarse' });
    }
  }

module.exports = ComentarioCtrl;