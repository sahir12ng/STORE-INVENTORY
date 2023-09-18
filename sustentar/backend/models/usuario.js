import { Schema,model } from "mongoose";

const usuarioSchema = new Schema({
    tipoDocumento:String,
    nombre:String,
    contra:String
  });
  
  const Usuario = model('Usuario', usuarioSchema);
  
export default  Usuario;