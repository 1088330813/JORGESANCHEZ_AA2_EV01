import { useEffect, useState } from 'react';
import './App.css';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  async function eliminarUsuario(id) {
    const peticion = await fetch(`http://localhost:3000/eliminar?id=${id}`, { credentials: 'include', method: 'DELETE' });
    if (peticion.ok) {
      alert("Usuario Eliminado");
      obtenerUsuarios();
    } else {
      alert('Usuario no Eliminado');
    }
  }

  async function obtenerUsuarios() {
    const peticion = await fetch('http://localhost:3000/usuarios', { credentials: 'include' });
    if (peticion.ok) {
      const respuesta = await peticion.json();
      setUsuarios(respuesta);
    } else {
      alert('No se pudieron obtener los usuarios');
    }
  }

  useEffect(() => {
    obtenerUsuarios();  // Obtiene los usuarios cuando el componente se monta
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Clave</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.usuario}</td>
              <td>{usuario.contrasena}</td>
              <td>
                <button onClick={() => { eliminarUsuario(usuario.id) }}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Usuarios;
