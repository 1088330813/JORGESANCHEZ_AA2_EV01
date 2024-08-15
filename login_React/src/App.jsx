import { useEffect, useState } from 'react';
import './App.css';
import Conversor from './Conversor';
import Usuarios from './Usuarios';
import Registro from './Registro';

function App() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [logueado, setLogueado] = useState(false);

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }

  function cambiarClave(evento) {
    setClave(evento.target.value);
  }

  async function ingresar() {
    const peticion = await fetch(`http://localhost:3000/login?usuario=${usuario}&contrasena=${clave}`, { credentials: 'include' });
    if (peticion.ok) {
      setLogueado(true)
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  async function validar() {
    const peticion = await fetch('http://localhost:3000/validar', { credentials: 'include' });
    if (peticion.ok) {
      setLogueado(true)
    }
  }

  useEffect(() => {
    validar();
  }, []);

  if (logueado) {
    return (
      <>

      <Registro />
      <Conversor />
      <Usuarios />
      </>)
  } 

  return (
    <>
      <h1>Inicio de Sesión</h1>
      <input type="text" name="usuario" id="usuario" placeholder="Usuario" value={usuario} onChange={cambiarUsuario} />
      <input type="password" name="clave" id="clave" placeholder="Clave" value={clave} onChange={cambiarClave} />
      <button onClick={ingresar}>Ingresar</button>


    </>
  );
}

export default App;
