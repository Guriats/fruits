import "./Home.css";

const template = () => {
  return `
  <h2 id>POR UNA VIDA SALUDABLE</h2>
  <p id="parrafo">Elige tu fruta favorita y comprueba su valor nutricional</p>
  `;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;