import "./Footer.css";

const template = () => {
    return `
    <p>Diseño y desarrollo  <em>app</em> - David Crespo - 2023</p>
    `;
  };
  
  const Footer = () => {
    document.querySelector("footer").innerHTML = template();
  };
  
  export default Footer;