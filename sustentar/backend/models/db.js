// Conectar a la base de datos de MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir modelos y crear documentos

// Modelo para la colección "categoria"
const Categoria = mongoose.model('Categoria', {
  idcategoria: Number,
  desc_categoria: String
});

// Modelo para la colección "tipo_documento"
const TipoDocumento = mongoose.model('TipoDocumento', {
  t_doc: String,
  desc_tdoc: String,
  tdoc_estado: Number
});

// Modelo para la colección "pregunta_seguridad"
const PreguntaSeguridad = mongoose.model('PreguntaSeguridad', {
  id_p_seg: Number,
  p_seg: String,
  ver_p_seg: String
});

// Modelo para la colección "usuario"
const Usuario = mongoose.model('Usuario', {
  t_doc_usuario: String,
  id_usuario: String,
  nom1_usuario: String,
  nom2_usuario: String,
  ap1_usuario: String,
  ap2_usuario: String,
  correo_usuario: String,
  telefono_usuario: String,
  nomb_user: String,
  pass_user: String,
  id_p_seg_fk: Number,
  ver_p_seg_fk: String
});




// Modelo para la colección "rol"
const Rol = mongoose.model('Rol', {
  id_rol: Number,
  nomb_rol: String
});

// Modelo para la colección "persona_has_roles"
const PersonaHasRoles = mongoose.model('PersonaHasRoles', {
  persona_tdoc: String,
  persona_id: String,
  persona_rol: Number,
  estado_rol: Number
});



// Crear documentos y guardarlos en MongoDB

// Ejemplo de cómo insertar un documento en la colección "categoria"
const nuevaCategoria = new Categoria({
  idcategoria: 1,
  desc_categoria: 'Ejemplo de Categoría'
});

nuevaCategoria.save((err) => {
  if (err) {
    console.error('Error al guardar la categoría:', err);
  } else {
    console.log('Categoría guardada exitosamente');
  }
});

// Repite el proceso para crear y guardar documentos en las demás colecciones

// Cerrar la conexión a la base de datos cuando hayas terminado
mongoose.connection.close();
