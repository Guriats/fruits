import "./Header.css";

const template = () => {
    return `
    
    <h1>NutriFruits</h1>
    <a href="#null" id="home-link">Home</a>
    <nav>    
    <div id="navhome">
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