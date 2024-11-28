let usuarios = [
    { id_usuario: 1, nombre: "Juan", apellido: "Pérez", edad: 25, ciudad: "Ciudad A", correo: "juan@example.com", password: "12345" },
    { id_usuario: 2, nombre: "Ana", apellido: "Gómez", edad: 30, ciudad: "Ciudad B", correo: "ana@example.com", password: "67890" },
];

const generarId = () => (usuarios.length ? Math.max(...usuarios.map(u => u.id_usuario)) + 1 : 1);

module.exports = {
    getUsuarios: () => usuarios,
    addUsuario: (usuario) => {
        const nuevoUsuario = { ...usuario, id_usuario: generarId() };
        usuarios.push(nuevoUsuario);
        return nuevoUsuario;
    },
    updateUsuario: (id, data) => {
        const index = usuarios.findIndex(u => u.id_usuario === id);
        if (index >= 0) {
            usuarios[index] = { ...usuarios[index], ...data };
            return usuarios[index];
        }
        return null;
    },
    deleteUsuario: (id) => {
        usuarios = usuarios.filter(u => u.id_usuario !== id);
    }
};
