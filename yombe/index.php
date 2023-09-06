<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Store Inventory</title>
    <link rel="shortcut icon" href="../assets/Imagen1.png" type="image/x-icon">
    <link rel="stylesheet" href="./css/normalize.css">
    <link rel="stylesheet" href="./css/index.css">
</head>
<body>
    
    <header class="hero">  



        <div class="hero__container container">

            <div class="hero__texts">
                <h1 class="hero__title">Store  Inventory</h1>
                <p class="hero__copy">Una hoja en blanco es una historia nueva</p> 
                <a href="./html/inicio_sesion.php" class="hero__cta"><strong>Ingresar</strong></a>
            </div>

            <img src="./img/1aad26e24060499974d848369d1b946c.jpg" class="hero__img"> 
        </div>
    </header>

    <main class="main"> 


        <section class="about container">

            <div class="about__course">
                <h2 class="title title--border">¿Qué es S.I.?</h2>

                <p class="about__paragraph">Es un sistema desarrollado para la gestion administrativa y el control de inventario para la papeleria Ariana.</p>
            </div>

            <figure class="about__picture">
                <img src="./img/Imagen1.png" class="about__img">
            </figure>

        </section>

        <section class="card">     <!-- en un elemento "section" indica que se está 
                                    utilizando un diseño de "tarjeta" para ese contenido. 
                                    Las tarjetas son elementos de diseño comunes en la web que se utilizan para 
                                    presentar contenido en un formato estructurado y visualmente atractivo.-->

            <div class="container">

                <h2 class="title">¿Cuáles son los beneficios de <br>tener un inventario?</h2>

                <div class="card__container">

                    <div class="card__item">
                        <figure class="card__img">
                            <img src="./img/SEO Report_Lineal-coloured.svg" class="card__picture">
                        </figure>
                        <h3 class="card__title">Resultados</h3>
                        <p class="card__paragraph">Se reflejan resultados optimos que aumenta la calidad de servicio y produccion de la papeleria, abarcando más publico y fidelizando a muchos clientes.</p>
                    </div>

                    <div class="card__item">
                        <figure class="card__img">
                            <img src="./img/Brainstorming_Lineal-coloured.svg" class="card__picture">
                        </figure>
                        <h3 class="card__title">Productividad</h3>
                        <p class="card__paragraph">Se reduce y ahorra el tiempo, incrementa la agilidad, se ahorran costos y se ofrece un mejor servicio al cliente</p>
                    </div>

                    <div class="card__item">
                        <figure class="card__img">
                            <img src="./img/Line Graph_Lineal-coloured.svg" class="card__picture">
                        </figure>
                        <h3 class="card__title">Estabilidad</h3>
                        <p class="card__paragraph">Mediante la gestion correcta, organización y control del inventario de la empresa se llega a un punto de estabilidad con baja probabilidad de errores.</p>
                    </div>
                    
                    <div class="card__item">
                        <figure class="card__img">
                            <img src="./img/Data visualization_Flat.svg" class="card__picture">
                        </figure>
                        <h3 class="card__title">Toma de Desiciones</h3>
                        <p class="card__paragraph">Al tener una visión confiable y segura del stock de la empresa se puede tomar mejores decisiones, como reducir costos al no cargar con excesos o faltantes de mercadería, de esa forma se podrá ofrecer un mejor servicio y/o producto al cliente.</p>
                    </div>

                </div>
            </div>
        </section>
    </main>

    <footer class="footer">         <!-- pie de pagina-->
        <div class="footer__container container">
            <p class="footer__copyright">
                Sitio web creado por &copy; Store Inventory 
            </p>
        </div>
    </footer>
</body>
</html>