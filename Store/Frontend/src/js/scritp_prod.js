export const FuncionRegistrarProd = async (producto) => {
    try {
      // Lógica para realizar la solicitud y obtener el resultado
      const response = await fetch('http://localhost:3000/api/producto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Devuelve un objeto con success, message y opcionalmente data
        return { success: true, message: 'Producto registrado con éxito', data: data };
      } else {
        // Si hay un error en la respuesta
        return { success: false, message: 'Error al registrar producto', data: null };
      }
    } catch (error) {
      // Si hay un error en la solicitud
      return { success: false, message: 'Error al registrar producto', data: error };
    }
  };
  
  export const FuncionBuscarProd = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/producto');
  
      if (!response.ok) {
        throw new Error('Error al buscar productos');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en FuncionBuscarProd:', error);
      throw error;
    }
  };
  
  export const FuncionEditarProd = async (prodId, producto) => {
    try {
      const response = await fetch(`http://localhost:3000/api/producto/${prodId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });
  
      if (!response.ok) {
        throw new Error('Error al editar producto');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const FuncionEliminarProd = async (prodId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/producto/${prodId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error al eliminar producto. Detalles: ${errorMessage}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en FuncionEliminarProd:', error);
      throw error;
    }
  };
  
  export const FuncionBuscarProdPorId = async (prodId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/producto/${prodId}`);
      const data = await response.json();
  
      console.log('Datos del producto por ID:', data);
  
      if (response.ok) {
        return data; // Devuelve los datos del producto si la respuesta es exitosa
      } else {
        throw new Error(data.message); // Lanza un error si la respuesta no es exitosa
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw new Error('Error al buscar producto por ID');
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
  
  // Función para buscar todas las categorías
  export const FuncionBuscarCategorias = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/categoria');
  
      if (!response.ok) {
        throw new Error('Error al buscar categorías');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en FuncionBuscarCategorias:', error);
      throw error;
    }
  };