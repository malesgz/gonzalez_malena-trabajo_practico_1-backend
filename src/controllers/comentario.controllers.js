const comentarioCtr = {};
const { default: comentario } = require('../models/comentario');
const comentario  = require('../models/comentario');

  comentarioCtr.createComentario= async (req, res) => {
    try {
      const { postId, text } = req.body;
      const post = await Comentario.findByPk(ComentarioId);
      if (!Comentario) {
        return res.status(404).json({ error: 'El comentario que busca no existe.' });
      }
      const nuevoComentario = await Comentario.create({
        descripcion,
        ComentarioId: comentarioId
      });
      res.status(201).json(nuevoComentario);
    } catch (error) {
      res.status(500).json({ error: 'El comentario no pudo publicarse' });
    }
  }

module.exports = comentarioCtr;