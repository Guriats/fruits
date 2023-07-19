import "./Header.css";

const template = () => {
    return `
    <h1>NutriFruits</h1>
    <nav>    
    <li>
      <a href="#null" id="home-link">Home</a>
    </li> 
    <div>
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