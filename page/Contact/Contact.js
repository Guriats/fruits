import "./Contact.css";

const template = () => {
  return `
  <div id="cabeceraNutri">
  <h1>NutriFruits</h1>
  <div id="direccion">
  <p>móvil: 674 90 78 44</p>
  <p>c/ Benito Pérez Galdos, nº 13
  cp. 37500, Baracaldo
  País Vasco</p>
  </div>
  </div>
  <div id="formulario">
  <input type="text" id="my-input-name" placeholder="Name"/>
  <input type="text" id="my-input-first-name" placeholder="First Name"/>
  <input type="text" id="my-input-e-mail" placeholder="e-mail"/>
  <input type="text" id="my-input-comentarios" placeholder="Comentarios"/>
  </div>
  <div id="mapa">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3038.197980401169!2d-3.7001075!3d40.4044647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227a18e1cbd83%3A0xace4a528a0e507e1!2sPor%20Talento%20Digital!5e0!3m2!1ses!2ses!4v1690192878358!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  
  `;
};

const Contact = () => {
  document.querySelector("main").innerHTML = template();
};

export default Contact;