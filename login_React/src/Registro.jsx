import { useEffect, useState } from 'react';
import './App.css';

function Registro() {
  const [usuarioRegistro, setUsuarioRegistro] = useState('');
  const [claveRegistro, setClaveRegistro] = useState('');

  function cambiarUsuarioRegistro(evento) {
    setUsuarioRegistro(evento.target.value);
  }

  function cambiarClaveRegistro(evento) {
    setClaveRegistro(evento.target.value);
  }

  async function registrar() {
    const peticion = await fetch(`http://localhost:3000/registro?usuario=${usuarioRegistro}&contrasena=${claveRegistro}`, { credentials: 'include' });
    if (peticion.ok) {
      alert("Usuario Registrado");
    } else {
      alert('Usuario no registrado');
    }
  }

  useEffect(() => {
  }, []);

  return (
    <>
      <h1>Registro</h1>
      <input type="text" name="usuario" id="usuario" placeholder="Usuario" value={usuarioRegistro} onChange={cambiarUsuarioRegistro} />
      <input type="password" name="clave" id="clave" placeholder="Clave" value={claveRegistro} onChange={cambiarClaveRegistro} />
      <button onClick={registrar}>Registrar</button>


    </>
  );
}

export default Registro;
