import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Conversor from './Conversor'

//estos son los estados
function App() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [logueado,setLogueado]=useState(false);

  function cambiarUsuario(evento) {
    setUsuario(evento.target.value);
  }

  function cambiarClave(evento) {
    setClave(evento.target.value);
  }

  function ingresar() {
    if (usuario === 'admin' && clave === 'admin') {
      alert('Ingresaste al sistema correctamente!')
      setLogueado(true);
    } else {
      alert('Error de contraseña o usuario');
    }
  }

if(logueado) {
  return <Conversor/>
  } return(
      <>
      <h1>Inicio de Sesión</h1>
      <input type="text" name="usuario" id="usuario" placeholder="Usuario" value={usuario} onChange={cambiarUsuario} />
      <input type="password" name="clave" id="clave" placeholder="Clave" value={clave} onChange={cambiarClave} />
      <button onClick={ingresar}>Ingresar</button>
      </>
    )
  }
export default App;

