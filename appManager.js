// Dependencias
const usuarioModel = require('../models/usuarioModel'); // Simulado o real
const publicacionesModel = require('../models/publicaciones.model'); // Simulado o real
const usuariosController = require('../controllers/usuarios.controller');
const publicacionesController = require('../controllers/publicaciones.controller');

class AppManager {
    #models;
    #controllers;

    constructor() {
        this.#models = {
            usuarioModel,
            publicacionesModel,
        };
        this.#controllers = {
            usuariosController,
            publicacionesController,
        };
        Object.preventExtensions(this); // Evita añadir nuevas propiedades
    }

    // Obtener los modelos
    getModels() {
        return this.#models;
    }

    // Obtener los controladores
    getControllers() {
        return this.#controllers;
    }
}

module.exports = AppManager;
