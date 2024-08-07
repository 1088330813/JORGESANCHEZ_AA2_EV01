const express = require('express');
const app = express();
const port = 3000;

// Get the client
const mysql = require('mysql2/promise'); // Usar la versión de promesas del módulo mysql2
const cors = require('cors')
const session = require('express-session')
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))
app.use(session({
  secret:'asglkjlkjasdgjhkjka1345345' /*esta clave es aleatoria*/
}))
// Create the connection to database
const connectionConfig = {
  host: 'localhost',
  user: 'root',
  database: 'jdbc',
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', async (req, res) => {
  const datos = req.query;
  console.log(datos);

  try {
    // Crear una conexión a la base de datos para esta solicitud
    const connection = await mysql.createConnection(connectionConfig);
    
    // A simple SELECT query
    const [results, fields] = await connection.execute(
      "SELECT * FROM `servletlogin` WHERE `usuario` = ? AND `contrasena` = ?",
      [datos.usuario, datos.contrasena]
    );

    if (results.length > 0) {
      req.session.usuario = datos.usuario;
      res.status(200).send('Inicio de sesión correcto')
    } else {
      res.status(401).send('Datos Incorrectos')
    }

    // Cerrar la conexión a la base de datos
    await connection.end();
  } catch (err) {
    console.log(err);
    res.status(500).send('Error en el servidor');
  }
});

app.get('/validar', (req, res) => {
  if(req.session.usuario){
    res.status(200).send('validación exitosa');
  }else{
    res.status(401).send('No autorizado');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
