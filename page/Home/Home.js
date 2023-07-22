import "./Home.css";

const template = () => {
  return `
  <section id="imagenPrincipal">
  <div id="contenedorFrutas">
  <img src="images/frutas.jpeg" alt="bodegón de frutas" id="frutas"/>
  </div> 
  <div id="texto">
  <h2>POR UNA VIDA SALUDABLE</h2>
  <p id="parrafo">Elige tu fruta favorita y comprueba su valor nutricional</p>
  </div>
  </section>
  <h2>Elige tu fruta</h2>
  <section>
    <ul>
      <li>
        <a href="#null"
          ><img
            src="images/albaricoque.png"
            alt="Albaricoque" id="homeFrutas"
        /></a>
      </li>
      <li>
      <a href="#null"
        ><img
          src="images/cereza.png"
          alt="Cereza" id="homeFrutas"
      /></a>
    </li>
    <li>
    <a href="#null"
      ><img
        src="images/ciruela.png"
        alt="Ciruela" id="homeFrutas"
    /></a>
  </li>
  <li>
  <a href="#null"
    ><img
      src="images/coco.png"
      alt="Coco" id="homeFrutas"
  /></a>
</li>
<li>
<a href="#null"
  ><img
    src="images/fresa.png"
    alt="Fresa" id="homeFrutas"
/></a>
</li> <li>
<a href="#null"
  ><img
    src="granada/.png"
    alt="Granada" id="homeFrutas"
/></a>
</li>
    </ul>
  </section>
  `;
};


const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;


/*<div id="contenedorFrutas">
  <img src="images/frutas.jpeg" alt="bodegón de frutas" id="frutas"/>
  </div> */