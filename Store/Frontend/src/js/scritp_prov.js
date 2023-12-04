export const FuncionRegistrarProv = async (proveedor) => {
    try {
      const response = await fetch('http://localhost:3000/api/proveedor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(proveedor),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return { success: true, message: data.message, data: data };
      } else {
        return { success: false, message: data.message, data: null };
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      return { success: false, message: 'Error interno del servidor al guardar proveedor', data: null };
    }
  };
  
  
  
  
  export const FuncionBuscarProv = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/proveedor');
  
      if (!response.ok) {
        throw new Error('Error al buscar proveedores');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en FuncionBuscarProv:', error);
      throw error;
    }
  };
  
  export const FuncionEditarProv = async (provId, proveedor) => {
    try {
      const response = await fetch(`http://localhost:3000/api/proveedor/${provId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(proveedor),
      });
  
      if (!response.ok) {
        throw new Error('Error al editar proveedor');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const FuncionEliminarProv = async (provId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/proveedor/${provId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error al eliminar proveedor. Detalles: ${errorMessage}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en FuncionEliminarProv:', error);
      throw error;
    }
  };
  
  export const FuncionBuscarProvPorId = async (provId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/proveedor/${provId}`);
      const data = await response.json();
  
      console.log('Datos del proveedor por ID:', data);
  
      if (response.ok) {
        return data; // Devuelve los datos del proveedor si la respuesta es exitosa
      } else {
        throw new Error(data.message); // Lanza un error si la respuesta no es exitosa
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw new Error('Error al buscar proveedor por ID');
    }
  };
  
  