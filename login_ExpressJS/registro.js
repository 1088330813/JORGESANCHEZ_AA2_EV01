const conexion = require("./conexion");

const registro = async (req, res) => {
    // Eliminar la verificación de sesión aquí si deseas permitir el registro sin autenticación
    const datos = req.query;
    try {
    //   const connection = await mysql.createConnection(connectionConfig);
  
      const [results] = await conexion.execute(
        "INSERT INTO `servletlogin` (`usuario`, `contrasena`) VALUES (?, ?)",
        [datos.usuario, md5(datos.contrasena)]
      );
  
      if (results.affectedRows > 0) {
        req.session.usuario = datos.usuario; // Esta línea puede ser eliminada si no quieres iniciar sesión automáticamente al registrar
        res.status(200).send('Registro correcto');
      } else {
        res.status(401).send('No se registró usuario');
      }
  
      await conexion.end();
    } catch (err) {
      console.log(err);
      res.status(500).send('Error en el servidor');
    }
  }
  module.exports = registro;