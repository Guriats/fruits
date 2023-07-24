import "./Contact.css";

const template = () => {
  return `
  <div id="direccion">
  <p>móvil: 674 90 78 44</p>
  <p>c/ Benito Pérez Galdos, nº 13
  cp. 37500, Baracaldo
  País Vasco</p>
  </div>
  <div id="formulario">
  <input type="text" id="my-input-name" placeholder="Name"/>
  <input type="text" id="my-input-first-name" placeholder="First Name"/>
  <input type="text" id="my-input-e-mail" placeholder="e-mail"/>
  <input type="text" id="my-input-comentarios" placeholder="Comentarios"/>
  </div>
  <div id="">
  </div>
  
  `;
};

const Contact = () => {
  document.querySelector("main").innerHTML = template();
};

export default Contact;