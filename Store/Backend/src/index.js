const usersRoutes =require("./routes/user.js")
const pol =require("./routes/tipodoc.js")
const olos =require("./routes/categoria.js")
const polispol =require("./routes/pregunta_seg.js")
const queso =require("./routes/proveedor.js")
const quesadilla =require("./routes/roles.js")
const pollo =require("./routes/p_r.js")
const lola =require("./routes/productos.js")
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())
app.use('/api', usersRoutes)
app.use('/api', pol)
app.use('/api', olos)
app.use('/api', polispol)
app.use('/api', queso)
app.use('/api', quesadilla)
app.use('/api', pollo)
app.use('/api',lola)

app.post('/user', (req, res) => {
    res.send('Crear usuario')
  })
  
  
const port = process.env.PORT || 3000;
app.listen(port,()=>
    console.log(`servidor corriendo en el puerto ${port}`)
    );
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Conectado a la bd')
}).catch((err) => {
    console.error(`Se produjo un error: ${err}`)
});
      
app.get('/',
    (req, res)=>{
        res.send('Bienvenido a mi API');
    });
