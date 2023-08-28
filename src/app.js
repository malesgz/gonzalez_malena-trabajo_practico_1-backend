// Imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

// Se conecta la Base de Datos
const { conectarDB } = require('./db');
conectarDB()
const app = express();
const port = process.env.PORT || 5050



// Middlewares
app.use(cors());
// app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));



// Routes
app.use( "/", require("./routes/comentario.routes"));
app.use("/", require("./routes/producto.routes"));
app.use( "/", require("./routes/usuario.routes"));




// Mostrar error 404
app.use((req, res, next) => {
    return res.status(404).render('404');
})

// Inicialización del servidor en el puerto.
app.listen(port, () => console.log(`Server on http://localhost:${port}`));