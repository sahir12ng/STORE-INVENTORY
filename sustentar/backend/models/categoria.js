// Conectar a la base de datos de MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/store', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir modelos y crear documentos

// Modelo para la colección "categoria"
const productos = mongoose.model('Categoria', {
  idcategoria: Number,
  desc_categoria: String
});

// Modelo para la colección "producto"
const Producto = mongoose.model('Producto', {
    Id_producto: Number,
    nom_producto: String,
    valor_producto: Number,
    disponibilidad_producto: Number,
    proveedor_Id_proveedor: Number
  });

// Modelo para la colección "producto_has_categoria"
const ProductoHasCategoria = mongoose.model('ProductoHasCategoria', {
    producto_Id_producto: Number,
    categoria_idcategoria: Number
  });

  // Modelo para la colección "producto_has_factura"
const ProductoHasFactura = mongoose.model('ProductoHasFactura', {
    producto_Id_producto: Number,
    factura_n_factura: Number
  });

  // Modelo para la colección "proveedor"
const Proveedor = mongoose.model('Proveedor', {
    Id_proveedor: Number,
    nombre_proveedor: String,
    direccion_proveedor: String
  });

  // Modelo para la colección "factura"
const Factura = mongoose.model('Factura', {
    n_factura: Number,
    fecha_factura: Date,
    subtotal: Number,
    iva: Number,
    total_factura: Number,
    usuario_t_doc_usuario: String,
    usuario_id_usuario: String
  });
  