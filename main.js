import './style.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Postit from './page/Postit/Postit';
import Home from './page/Home/Home';
import linkPage from './utils/linkPage';
Home();
Header();
Footer();
Postit();

linkPage("#home-link", Home);
//document.querySelector("#home-link").addEventListener("click", Home);