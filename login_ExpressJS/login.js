const conexion = require("./conexion");

const login = async (req, res) => {
    const datos = req.query;
    console.log('Datos recibidos:', datos);

    try {
        const [results] = await conexion.execute(
            "SELECT * FROM `servletlogin` WHERE `usuario` = ? AND `contrasena` = ?",
            [datos.usuario, datos.contrasena]  // Comparar sin encriptar
        );

        console.log('Resultados de la base de datos:', results);

        if (results.length > 0) {
            req.session.usuario = datos.usuario;
            console.log('Inicio de sesión exitoso');
            res.status(200).send('Inicio de sesión correcto');
        } else {
            console.log('Datos Incorrectos');
            res.status(401).send('Datos Incorrectos');
        }
    } catch (err) {
        console.log('Error en el servidor:', err);
        res.status(500).send('Error en el servidor');
    }
};

module.exports = login;
