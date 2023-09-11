<>
<body>
        
        <section class="container">
            <div class="mt-3 p-4"/>

            <div class="row">

            <div class="col-12 bg-white rounded-top">
            <h2 class="fw-bold text-center py-1 mt-4">¿Eres nuevo?<br/>Regístrate <i class="fas fa-grin-wink"></i></h2>

            </div>

                <div class="col-6 bg-white p-5 pb-0">

                <form action="../php/yo.php" method="POST" autocomplete="off"/>

                    <div class="mb-3"> 
                    <label for="t_doc" class="form-label"><i class="far fa-address-card"></i> Tipo de Documento</label>
                        <select class="form-select" name="t_doc" id="t_doc">
                            <option value="C.C">Cédula de Ciudadanía</option>
                            <option value="C.E">Cédula de Extranjería</option>
                            <option value="T.I">Tarjeta de Identidad</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="documento" class="form-label"><i class="fas fa-id-card"></i> Número de Documento</label>
                        <input type="text" id="documento" class="form-control" name="documento" inputmode="numeric" max="9999999999" min="1000000000" required/>
                    </div>
                    
                    

                    <div class="mb-3">
                        <label for="nombre" class="form-label"><i class="fas fa-user-tag"></i> Primer Nombre</label>
                        <input type="text" id="nombre" class="form-control" name="nombre" MaxLength="45" required />
                    </div>

                    <div class="mb-3">
                        <label for="2nombre" class="form-label"><i class="far fa-user"></i> Segundo Nombre</label>
                        <input type="text" id="2nombre" class="form-control" name="2nombre"/>
                    </div>

                    <div class="mb-3">
                        <label for="apellido" class="form-label"><i class="fas fa-user-tag"></i> Primer Apellido</label>
                        <input type="text" id="apellido" class="form-control" name="apellido" required/>
                    </div>

                    <div class="mb-3">
                        <label for="2apellido" class="form-label"><i class="far fa-user"></i> Segundo Apellido</label>
                        <input type="text" id="2apellido" class="form-control" name="2apellido"/>
                    </div>

                    

                </div>

                <div class="col-6 bg-white p-5 pb-0">

                    <div class="mb-3">
                        <label for="usuario" class="form-label"><i class="fas fa-user-circle"></i> Nombre De Usuario</label>
                        <input type="text" id="usuario" class="form-control" name="usuario" required/>
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label"><i class="fas fa-key"></i> Contraseña</label>
                            <input type="password" id="password" class="form-control" name="password" required/>
                    </div>

                    <div class="mb-3">
                        <label for="tel" class="form-label"><i class="fas fa-phone-alt"></i> Teléfono</label>
                        <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">+57</span>
                        <input type="tel" id="tel" class="form-control" name="tel" aria-labeL="teléfono" aria-describedby="basic-addon1" placeholder="--- --- ----" required/>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="correo" class="form-label"><i class="fas fa-envelope"></i> Correo Electrónico</label>
                        <input type="email" id="correo" class="form-control" name="correo" required/>
                    </div>

                    <div class="mb-3">
                        <label for="Pregunta" class=""><i class="fas fa-user"></i> Pregunta seguridad</label>
                        <select class="form-select" name="pregunta" id="pregunta">
                            <option value="1">Ciudad de nacimiento</option>
                            <option value="2">Nombre de tu mascota</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="respuesta" class="form-label"><i class="fas fa-user-tag"></i> respuesta</label>
                        <input type="text" id="respuesta" class="form-control" name="respuesta" required/>
                    </div>
                    
                    

                </div>

                

                <div class="col-12 bg-white mb-3 rounded-bottom ps-5 pe-5">

                    <a href="inicio_sesion.php" class="text-decoration-none">
                        <div class="d-grid mb-4">
                        
                            <button type="submit" class="btn btn-primary link"><i class="fas fa-arrow-circle-left"></i> Registrar</button>
                        
                        </div>
                    </a>

                    <a href="inicio_sesion.php" class="text-decoration-none">
                        <div class="d-grid mb-4">
                        
                            <button type="button" className="btn btn-primary link"><i class="fas fa-arrow-circle-left"></i> Volver</button>
                        
                        </div>
                    </a>
                </div>
            <form/>
            </div>
        </section>
</body>
</>