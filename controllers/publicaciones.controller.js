const PublicacionesModel = require('../models/publicaciones.model');

exports.getPublicaciones = (req, res) => {
    res.json(PublicacionesModel.getPublicaciones());
};

exports.addPublicacion = (req, res) => {
    const nuevaPublicacion = PublicacionesModel.addPublicacion(req.body);
    res.status(201).json(nuevaPublicacion);
};

exports.updatePublicacion = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPublicacion = PublicacionesModel.updatePublicacion(id, req.body);
    if (updatedPublicacion) {
        res.json(updatedPublicacion);
    } else {
        res.status(404).json({ error: "Publicación no encontrada" });
    }
};

exports.deletePublicacion = (req, res) => {
    const id = parseInt(req.params.id);
    PublicacionesModel.deletePublicacion(id);
    res.status(204).send();
};
