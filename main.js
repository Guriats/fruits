import './style.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Postit from './page/Postit/Postit';
import Home from './page/Home/Home';
import linkPage from './utils/linkPage';
import About from './page/About/About';
import Contact from './page/Contact/Contact';
import Api from './page/Api/Api';




Header();
About();
Home();
Footer();
Postit();
Api();


linkPage("#contact-link", Contact);
linkPage("#about-link", About);
linkPage("#home-link", Home);

//document.querySelector("#home-link").addEventListener("click", Home);
