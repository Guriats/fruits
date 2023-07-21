import "./Contact.css";

const template = () => {
  return `
  <h2 id>POR UNA VIDA SALUDABLE</h2>
  <p id="parrafo">Elige tu fruta favorita y comprueba su valor nutricional</p>
  `;
};

const Contact = () => {
  document.querySelector("main").innerHTML = template();
};

export default Contact;