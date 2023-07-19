import "./Home.css";

const template = () => {
  return `
  <h2>POR UNA VIDA SALUDABLE</h2>
  <p>Elige tu fruta favorita y comprueba su valor nutricional</p>
  `;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;