let publicaciones = [
    { id_publicacion: 1, texto: "Primera publicación" },
    { id_publicacion: 2, texto: "Segunda publicación" },
];

const generarId = () => (publicaciones.length ? Math.max(...publicaciones.map(p => p.id_publicacion)) + 1 : 1);

module.exports = {
    getPublicaciones: () => publicaciones,
    addPublicacion: (publicacion) => {
        const nuevaPublicacion = { ...publicacion, id_publicacion: generarId() };
        publicaciones.push(nuevaPublicacion);
        return nuevaPublicacion;
    },
    updatePublicacion: (id, data) => {
        const index = publicaciones.findIndex(p => p.id_publicacion === id);
        if (index >= 0) {
            publicaciones[index] = { ...publicaciones[index], ...data };
            return publicaciones[index];
        }
        return null;
    },
    deletePublicacion: (id) => {
        publicaciones = publicaciones.filter(p => p.id_publicacion !== id);
    }
};
