const UsuarioModel = require('../models/usuarios.model');

exports.getUsuarios = (req, res) => {
    res.json(UsuarioModel.getUsuarios());
};

exports.addUsuario = (req, res) => {
    const nuevoUsuario = UsuarioModel.addUsuario(req.body);
    res.status(201).json(nuevoUsuario);
};

exports.updateUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUsuario = UsuarioModel.updateUsuario(id, req.body);
    if (updatedUsuario) {
        res.json(updatedUsuario);
    } else {
        res.status(404).json({ error: "Usuario no encontrado" });
    }
};

exports.deleteUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    UsuarioModel.deleteUsuario(id);
    res.status(204).send();
};
