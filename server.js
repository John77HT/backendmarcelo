const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Datos simulados para usuarios y publicaciones
let usuarios = [
    { id_usuario: 1, nombre: "Juan", apellido: "Pérez", edad: 25, ciudad: "Ciudad A", correo: "juan@example.com", password: "12345" },
    { id_usuario: 2, nombre: "Ana", apellido: "Gómez", edad: 30, ciudad: "Ciudad B", correo: "ana@example.com", password: "67890" },
];

let publicaciones = [
    { id_publicacion: 1, texto: "Primera publicación" },
    { id_publicacion: 2, texto: "Segunda publicación" },
];

// Función para generar IDs únicos
const generarId = (lista) => (lista.length ? Math.max(...lista.map(item => item.id_usuario || item.id_publicacion)) + 1 : 1);

// Rutas para usuarios
app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/api/usuarios', (req, res) => {
    const nuevoUsuario = { ...req.body, id_usuario: generarId(usuarios) };
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

app.put('/api/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const usuarioIndex = usuarios.findIndex(u => u.id_usuario === id);
    if (usuarioIndex >= 0) {
        usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...req.body };
        res.json(usuarios[usuarioIndex]);
    } else {
        res.status(404).json({ error: "Usuario no encontrado" });
    }
});

app.delete('/api/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);
    usuarios = usuarios.filter(u => u.id_usuario !== id);
    res.status(204).send();
});

// Rutas para publicaciones
app.get('/api/publicaciones', (req, res) => {
    res.json(publicaciones);
});

app.post('/api/publicaciones', (req, res) => {
    const nuevaPublicacion = { ...req.body, id_publicacion: generarId(publicaciones) };
    publicaciones.push(nuevaPublicacion);
    res.status(201).json(nuevaPublicacion);
});

app.put('/api/publicaciones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const publicacionIndex = publicaciones.findIndex(p => p.id_publicacion === id);
    if (publicacionIndex >= 0) {
        publicaciones[publicacionIndex] = { ...publicaciones[publicacionIndex], ...req.body };
        res.json(publicaciones[publicacionIndex]);
    } else {
        res.status(404).json({ error: "Publicación no encontrada" });
    }
});

app.delete('/api/publicaciones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    publicaciones = publicaciones.filter(p => p.id_publicacion !== id);
    res.status(204).send();
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
