import './App.css';
import index from "./css/index.css"
import normalize from "./css/normalize.css"
import inicio_sesion from "./olapa/incio_sesion"

function App() {
  return (
    <div className="App">
      <title>Store Inventory</title>
    <link rel="stylesheet" href="css/normalize.css"/>
      <body>
      <header className="hero"> 

        <div className="hero__container container">

            <div className="hero__texts">
                <h1 className="hero__title">Store  Inventory</h1>
                <p className="hero__copy">Una hoja en blanco es una historia nueva</p> 
                <a href="html/inicio_sesion.php" className="hero__cta"><strong>Ingresar</strong></a>
            </div>

            <img src="https://github.com/sahir12ng/STORE-INVENTORY/blob/main/HTML,CSS,%20IMG,php/img/1aad26e24060499974d848369d1b946c.jpg?raw=true" className="hero__img"/> 
        </div>
    </header>

    <main className="main"> 


        <section className="about container">

            <div className="about__course">
                <h2 className="title title--border">¿Qué es S.I.?</h2>

                <p className="about__paragraph">Es un sistema desarrollado para la gestion administrativa y el control de inventario para la papeleria Ariana.</p>
            </div>

            <figure className="about__picture">
                <img src="https://github.com/sahir12ng/STORE-INVENTORY/blob/main/HTML,CSS,%20IMG,php/img/Imagen1.png?raw=true" className="about__img"/>
            </figure>

        </section>

        <section className="card"> 

            <div className="container">

                <h2 className="title">¿Cuáles son los beneficios de <br/>tener un inventario?</h2>

                <div className="card__container">

                    <div className="card__item">
                        <figure className="card__img">
                            <img src="https://raw.githubusercontent.com/sahir12ng/STORE-INVENTORY/e091a702d489e5c010e2f64d2d72caab47fb79e6/HTML%2CCSS%2C%20IMG%2Cphp/img/SEO%20Report_Lineal-coloured.svg" className="card__picture"/>
                        </figure>
                        <h3 className="card__title">Resultados</h3>
                        <p className="card__paragraph">Se reflejan resultados optimos que aumenta la calidad de servicio y produccion de la papeleria, abarcando más publico y fidelizando a muchos clientes.</p>
                    </div>

                    <div className="card__item">
                        <figure className="card__img">
                            <img src="https://raw.githubusercontent.com/sahir12ng/STORE-INVENTORY/e091a702d489e5c010e2f64d2d72caab47fb79e6/HTML%2CCSS%2C%20IMG%2Cphp/img/Brainstorming_Lineal-coloured.svg" className="card__picture"/>
                        </figure>
                        <h3 className="card__title">Productividad</h3>
                        <p className="card__paragraph">Se reduce y ahorra el tiempo, incrementa la agilidad, se ahorran costos y se ofrece un mejor servicio al cliente</p>
                    </div>

                    <div className="card__item">
                        <figure className="card__img">
                            <img src="https://raw.githubusercontent.com/sahir12ng/STORE-INVENTORY/e091a702d489e5c010e2f64d2d72caab47fb79e6/HTML%2CCSS%2C%20IMG%2Cphp/img/Line%20Graph_Lineal-coloured.svg" className="card__picture"/>
                        </figure>
                        <h3 className="card__title">Estabilidad</h3>
                        <p className="card__paragraph">Mediante la gestion correcta, organización y control del inventario de la empresa se llega a un punto de estabilidad con baja probabilidad de errores.</p>
                    </div>
                    
                    <div className="card__item">
                        <figure className="card__img">
                            <img src="https://raw.githubusercontent.com/sahir12ng/STORE-INVENTORY/e091a702d489e5c010e2f64d2d72caab47fb79e6/HTML%2CCSS%2C%20IMG%2Cphp/img/Data%20visualization_Flat.svg" className="card__picture"/>
                        </figure>
                        <h3 className="card__title">Toma de Desiciones</h3>
                        <p className="card__paragraph">Al tener una visión confiable y segura del stock de la empresa se puede tomar mejores decisiones, como reducir costos al no cargar con excesos o faltantes de mercadería, de esa forma se podrá ofrecer un mejor servicio y/o producto al cliente.</p>
                    </div>

                </div>
            </div>
        </section>
    </main>

    <footer className="footer">
        <div className="footer__container container">
            <p className="footer__copyright">
                Sitio web creado por &copy; Store Inventory 
            </p>
        </div>
    </footer>
</body>
    </div>
  );
}

export default App;
