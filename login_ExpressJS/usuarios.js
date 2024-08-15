const conexion = require("./conexion");

const obtenerUsuarios = async (req, res) => {
    if (!req.session.usuario) {
        res.status(401).send('No autorizado');
        return;
    }
    try {
        const [results] = await conexion.execute("SELECT * FROM `servletlogin`");
        res.status(200).json(results);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error en el servidor');
    }
};

const eliminarUsuarios = async (req, res) => {
    if (!req.session.usuario) {
        res.status(401).send('No autorizado');
        return;
    }
    const { id } = req.query;  // Obtener el id de los parámetros de consulta
    try {
        const [results] = await conexion.execute("DELETE FROM `servletlogin` WHERE `id` = ?", [id]);

        if (results.affectedRows > 0) {
            res.status(200).send('Usuario Eliminado');
        } else {
            res.status(401).send('No se pudo eliminar');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error en el servidor');
    }
};

module.exports = { obtenerUsuarios, eliminarUsuarios };
