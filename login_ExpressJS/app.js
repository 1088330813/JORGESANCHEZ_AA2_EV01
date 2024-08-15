const express = require('express');
const cors = require('cors');
const session = require('express-session');
const login = require('./login');
const registro = require('./registro');
const { obtenerUsuarios, eliminarUsuarios } = require('./usuarios');
const validar = require('./validar');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(session({
  secret: 'asglkjlkjasdgjhkjka1345345',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Cambiar a `true` si estás usando HTTPS
}));

app.use(express.json()); // Asegúrate de que esta línea esté incluida para manejar JSON

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', login);
app.get('/registro', registro);
app.get('/usuarios', obtenerUsuarios);
app.delete('/eliminar', eliminarUsuarios);  // Asegúrate de que la ruta sea DELETE
app.get('/validar', validar);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
