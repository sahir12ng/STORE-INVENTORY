import React, { useState, useEffect } from 'react';
import PageContent from "../../Components/PageContent";
import AppFooter from '../../Components/AppFooter';
import AppHeader from '../../Components/AppHeader';
import SideMenu from '../../Components/SideMenu';
import { Image, Input,Button } from 'antd';

const ActualizarPerfilForm = () => {
  const [formValues, setFormValues] = useState({
    nuevoNombre: '',
    nuevoCorreo: '',
    nuevoTelefono: '',
    nuevoUsername: '',
    nuevaContraseña: '',
    nuevoVerPregSeg: '',
  });
  const [error, setError] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    console.log('Entrando a useEffect en ActualizarPerfilForm');

    // Obtener la información del usuario desde sessionStorage
    const user = JSON.parse(sessionStorage.getItem('user'));

    console.log('Usuario desde sessionStorage:', user);

    // Verificar si hay un usuario almacenado en sessionStorage
    if (!user || !user.userId) {
      console.log('Usuario no autenticado');
      // Manejar el caso en el que no hay usuario almacenado
      setError('Usuario no autenticado');
    } else {
      console.log('Usuario autenticado. userId:', user.userId);
      // Puedes almacenar el userId en el estado del componente
      setUserId(user.userId);

      // Llamar a la función para buscar el usuario por su ID
      buscarUsuario(user.userId);
    }
  }, []);

  const buscarUsuario = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/${userId}`);
      if (response.ok) {
        const usuario = await response.json();
        console.log('Usuario encontrado:', usuario);

        // Preenchir el formulario con la información del usuario
        setFormValues({
          nuevoCorreo: usuario.correo_usuario,
          nuevoTelefono: usuario.telefono,
          nuevoUsername: usuario.username,
          nuevaContraseña: usuario.contraseña,
          nuevoVerPregSeg: usuario.ver_p_seg,
        });
      } else {
        console.log('Error al buscar el usuario. Código de estado:', response.status);
        setError('Error al buscar el usuario');
      }
    } catch (error) {
      console.log('Error al buscar el usuario:', error);
      setError(`Error al buscar el usuario: ${error.message}`);
    }
  };

  const handleActualizarPerfil = async () => {
    console.log('Entrando a handleActualizarPerfil');

    try {
      // Obtener la información del usuario desde sessionStorage
      const user = JSON.parse(sessionStorage.getItem('user'));

      console.log('Usuario desde sessionStorage:', user);

      // Verificar si hay un usuario almacenado en sessionStorage
      if (!user || !user.userId) {
        setError('Usuario no autenticado');
        return;
      }

      // Imprime el valor de userId antes de realizar la solicitud
      console.log('Valor de userId:', userId);

      // Imprime la URL de la solicitud antes de realizarla
      console.log('URL de la solicitud:', `http://localhost:3000/api/actualizarPerfil/${userId}`);

      const response = await fetch(`http://localhost:3000/api/actualizarPerfil/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          userId: userId,
          nuevoCorreo: formValues.nuevoCorreo,
          nuevoTelefono: formValues.nuevoTelefono,
          nuevoUsername: formValues.nuevoUsername,
          nuevaContraseña: formValues.nuevaContraseña,
          nuevoVerPregSeg: formValues.nuevoVerPregSeg,
        }),
      });

      if (response.ok) {
        // Lógica adicional si la actualización fue exitosa
        console.log('Perfil actualizado con éxito');
      } else {
        // Manejar errores de la solicitud
        console.log('Error al realizar la solicitud. Código de estado:', response.status);
        setError('Error al actualizar el perfil');
      }
    } catch (error) {
      // Manejar errores de la aplicación
      console.log('Error al actualizar el perfil:', error);
      setError(`Error al actualizar el perfil: ${error.message}`);
    }
  };

    return (
      <div className="App">
      <AppHeader></AppHeader>
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent><div className="container d-flex align-items-center justify-content-center vh-90">
      <div className="card p-5" style={{ width: '35%', display: 'flex', flexDirection: 'column' }}>
        <h2 className="mb-4 text-center">Actualizar Perfil</h2>
        <form style={{ flex: 1 }}>
          <div className="mb-3">
            <label htmlFor="nuevoCorreo" className="form-label">
              Nuevo Correo:
              <Input
                type="email"
                id="nuevoCorreo"
                value={formValues.nuevoCorreo}
                onChange={(e) => setFormValues({ ...formValues, nuevoCorreo: e.target.value })}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="nuevoTelefono" className="form-label">
              Nuevo Teléfono:
              <Input
                type="text"
                id="nuevoTelefono"
                value={formValues.nuevoTelefono}
                onChange={(e) => setFormValues({ ...formValues, nuevoTelefono: e.target.value })}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="nuevoUsername" className="form-label">
              Nuevo Username:
              <Input
                type="text"
                id="nuevoUsername"
                value={formValues.nuevoUsername}
                onChange={(e) => setFormValues({ ...formValues, nuevoUsername: e.target.value })}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="nuevaContraseña" className="form-label">
              Nueva Contraseña:
              <Input.Password
                id="nuevaContraseña"
                value={formValues.nuevaContraseña}
                onChange={(e) => setFormValues({ ...formValues, nuevaContraseña: e.target.value })}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="nuevoVerPregSeg" className="form-label">
              Nueva respuesta de Seguridad:
              <Input
                type="text"
                id="nuevoVerPregSeg"
                value={formValues.nuevoVerPregSeg}
                onChange={(e) => setFormValues({ ...formValues, nuevoVerPregSeg: e.target.value })}
              />
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button type="primary" onClick={handleActualizarPerfil}>
              Actualizar Perfil
            </Button>
            {error && <div className="text-danger">{error}</div>}
          </div>
        </form>
      </div>
    </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default ActualizarPerfilForm;