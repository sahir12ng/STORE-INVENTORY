import React from 'react';

function InicioSesion() {
  return (
    <body>
  <div class="overlay"></div>
  <section class="container position-absolute top-50 start-50 translate-middle">
            <div class="mt-3 rounded p-5">
              <div class="row">
                <div class="col_1 fondo d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded-start d-flex">
                  <img src="../img/logotipo-removebg-preview.png" alt="inventario"/>
                </div>
              
                
                <div class="col bg-white p-5 rounded-end">
                    
                  <div class="row justify-content-between">
                    <div class="col-4">
                      <img src="../img/isotipo.PNG" width="420" alt="logo"/>
                    </div>
                  </div>
                  <h2 class="fw-bold text-center py-5">¡Bienvenido!</h2>

                  
                  <form action="validar.php" method="POST">
                    <div class="mb-3">
                        <label for="xd" class="form-label">Ingrese su tipo de documento</label>
                        <select name="aña" class="form-select">
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="user" class="form-label">Número de documento</label>
                        <input type="text" id="user" name="user" class="form-control" placeholder="Ingrese su ID" required/>
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Contraseña</label>
                        <input type="password" id="password" name="pass" class="form-control" placeholder="Ingrese su contraseña" required/>
                    </div>

                    <div class="d-grid">
                      <input type="submit" class="btn btn-primary" value="Iniciar Sesión"/>
                    </div>

                    <a href="registar.php" class="link">
                      <div class="d-grid">
                        <button type="button" class="btn btn-primary registro">Registrarme <i class="fas fa-clipboard-list"></i> </button>
                      </div>
                    </a>
                    <div class="my-3">
                      <span><a href="Recuperar_Contraseña.php">Olvidé mi contraseña</a></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
  </section>
</body>
  );
}

export default InicioSesion;
