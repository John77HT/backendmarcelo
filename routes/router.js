const express = require('express');
const router = express.Router();

// Controladores
const UsuariosController = require('../controllers/usuarios.controller');
const PublicacionesController = require('../controllers/publicaciones.controller');

// Rutas para usuarios
router.get('/api/usuarios', UsuariosController.getUsuarios);
router.post('/api/usuarios', UsuariosController.addUsuario);
router.put('/api/usuarios/:id', UsuariosController.updateUsuario);
router.delete('/api/usuarios/:id', UsuariosController.deleteUsuario);

// Rutas para publicaciones
router.get('/api/publicaciones', PublicacionesController.getPublicaciones);
router.post('/api/publicaciones', PublicacionesController.addPublicacion);
router.put('/api/publicaciones/:id', PublicacionesController.updatePublicacion);
router.delete('/api/publicaciones/:id', PublicacionesController.deletePublicacion);

module.exports = router;
