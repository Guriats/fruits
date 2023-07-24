import "./About.css";

const template = () => {
  return `
  
  <div id="contenedorNaranjo">
  <img src="images/naranjos.webp" alt="Naranjos" id="naranjo"/>
  </div> 

  <p id="about">Somos una empresa que ha desarrollado una app de nutrición que ayuda a los usuarios a conocer los valores nutricionales de diferentes frutas. La app está disponible para iOS y Android, y es gratuita.

Para usar la app, simplemente busca la fruta que quieres conocer en la barra de búsqueda. La app te mostrará una tabla con los valores nutricionales de la fruta, incluyendo las calorías, las vitaminas, los minerales, los carbohidratos, las proteínas y las grasas.

La app también incluye una sección de consejos nutricionales, que te ayudan a entender cómo las frutas pueden mejorar tu salud. También puedes compartir tus resultados con tus amigos y familiares a través de las redes sociales.

Creemos que la app es una herramienta valiosa para cualquiera que quiera aprender más sobre las frutas y cómo pueden mejorar su salud. Esperamos que te guste usarla."

Aquí tienes algunos de los beneficios de usar la app:

Conoce los valores nutricionales de diferentes frutas.
Aprende cómo las frutas pueden mejorar tu salud.
Comparte tus resultados con tus amigos y familiares.
Usa la app para crear un plan de alimentación saludable.
Si estás interesado en aprender más sobre las frutas y cómo pueden mejorar tu salud, descarga la app hoy mismo.</p>
  `;
};

const About = () => {
  document.querySelector("main").innerHTML = template();
};

export default About;