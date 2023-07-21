import "./Header.css";

const template = () => {
    return `
    
    <h1>NutriFruits</h1>
    <nav>    
    <div id="navhome">
    <a href="#null" id="home-link">Home</a>
    <a href="#null" id="about-link">About us</a>
    <a href="#null" id="contact-link">Contact</a>
    <input type="text" id="my-input" placeholder="Choose a fruit..."/>
    <button id="my-btn">Search</button>
    </div>
    </nav>
    `;
  };


  const Header = () => {
    document.querySelector("header").innerHTML = template();
  };

  export default Header;