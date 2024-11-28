const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router'); // Importa el archivo combinado

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Usar rutas
app.use(router);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
