import { variedadFrutas } from "../../data/data";
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
  
  <h2 id="eligeFruta">Elige tu fruta</h2>

  <ul id="fruits-container"></ul>

<hr>

  <div class="containerOpinion">

  <div class="opinion">
  <img src="images/Angelina.webp" alt="Angelina" class="foto">
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
  </div>

  <div class="opinion">
  <img src="images/michel.jpg" alt="Michel" class="foto">
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
  </div>

  <div class="opinion">
  <img src="images/salma.jpg" alt="Salma" class="foto">
  <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
  </div>

  </div>
  `;
};




const printFruits = () => {
  const fruitContainer = document.querySelector("#fruits-container");
  for (const variedadFruta of variedadFrutas) {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = "#null";
    anchor.innerHTML = `<h3>${variedadFruta.nombre}</h3>`;
    const img = document.createElement("img");
    img.src = variedadFruta.foto;
    img.alt = variedadFruta.nombre;


    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      const main = document.querySelector("main");
      main.innerHTML = `
        <div class="fruta">
          <li>
            <img src="${variedadFruta.foto}" alt="${variedadFruta.nombre}"/>
            <h3>${variedadFruta.nombre}</h3>
            <div class="genero">
              <p>Género: ${variedadFruta.genero}</p>
              <p>Familia: ${variedadFruta.familia}</p>
            </div>
            <div class="cualidades">
              <p>Carbohidratos: ${variedadFruta.carbohidratos}</p>
              <p>Grasas: ${variedadFruta.grasas}</p>
              <p>Calorías: ${variedadFruta.calorias}</p>
            </div>
          </li>
        </div>
      `;
    });



    img.addEventListener("click", function(event) {
      event.preventDefault();
      const main = document.querySelector("main");
      main.innerHTML = `
        <div class="fruta">
          <li>
            <img src="${variedadFruta.foto}" alt="${variedadFruta.nombre}"/>
            <h3>${variedadFruta.nombre}</h3>
            <div class="genero">
              <p>Género: ${variedadFruta.genero}</p>
              <p>Familia: ${variedadFruta.familia}</p>
            </div>
            <div class="cualidades">
              <p>Carbohidratos: ${variedadFruta.carbohidratos}</p>
              <p>Grasas: ${variedadFruta.grasas}</p>
              <p>Calorías: ${variedadFruta.calorias}</p>
            </div>
          </li>
        </div>
      `;
    });




    li.appendChild(img);
    li.appendChild(anchor);
    fruitContainer.appendChild(li);
  }
};











const Home = () => {
  document.querySelector("main").innerHTML = template();
  printFruits ();
};

export default Home;


/*<div id="contenedorFrutas">
  <img src="images/frutas.jpeg" alt="bodegón de frutas" id="frutas"/>
  </div> */