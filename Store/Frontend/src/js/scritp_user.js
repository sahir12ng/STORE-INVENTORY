export const FuncionRegistrarUsuario = async (usuario) => {
    try {
      const response = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return { success: true, message: data.message, data: data };
      } else {
        return { success: false, message: data.message, data: null };
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return { success: false, message: 'Error interno del servidor al registrar usuario', data: null };
    }
  };
  
  export const FuncionBuscarUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/user');
  
      if (!response.ok) {
        throw new Error('Error al buscar usuarios');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en FuncionBuscarUsuarios:', error);
      throw error;
    }
  };
  
  export const FuncionEditarUsuario = async (userId, usuario) => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });
  
      if (!response.ok) {
        throw new Error('Error al editar usuario');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const FuncionEliminarUsuario = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/${userId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error al eliminar usuario. Detalles: ${errorMessage}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en FuncionEliminarUsuario:', error);
      throw error;
    }
  };
  
  export const FuncionBuscarUsuarioPorId = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/usuario/${userId}`);
      const data = await response.json();
  
      console.log('Datos del usuario por ID:', data);
  
      if (response.ok) {
        return data; // Devuelve los datos del usuario si la respuesta es exitosa
      } else {
        throw new Error(data.message); // Lanza un error si la respuesta no es exitosa
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw new Error('Error al buscar usuario por ID');
    }
  };
  

  export const FuncionObtenerTipoDoc = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/tipodoc`);
  
      if (!response.ok) {
        throw new Error('Error al obtener datos del tipo de documento');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en FuncionObtenerTipoDoc:', error);
      throw error;
    }
  };
  

  export const FuncionObtenerPreguntasSeguridad = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/pregunta_seg`);

        if (!response.ok) {
            throw new Error('Error al obtener datos de las preguntas de seguridad');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en FuncionObtenerPreguntasSeguridad:', error);
        throw error;
    }
};
