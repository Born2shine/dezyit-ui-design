import './assets/css/main.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import Home from './components/Home';
import Navbar from './components/Navs/Navbar';
import playstore from "./assets/images/google-play-store.png"
import appstore from "./assets/images/appstore.png"


function App() {
  
  return (
    <div className="App">
      <section className="main">
        <Navbar/>
        <Router>
            <Switch>
              <Route exact path="/"> <Home/> </Route>
            </Switch>
        </Router>
        <footer>
          <div className="footer-wrapper">
            <article className="contact-form">
              <h1 className="title">Reach out to us</h1>
              <div className="form-container">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Name"/>
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Phone"/>
                  </div>
                  <div className="form-group">
                    <textarea cols="30" rows="10" placeholder="type your message here"></textarea>
                  </div>
                </form>
              </div>
            </article>
            <article className="quick-links">
              <div className="about">
                <h1 className="title">About</h1>
                <ul>
                  <li className="link"><a href="#home">Home</a></li>
                  <li className="link"><a href="#product">Our Product</a></li>
                  <li className="link"><a href="#why-us">Why Us?</a></li>
                </ul>
              </div>
              <div className="download-app">
                  <h1 className="title">Download Dezy It </h1>
                  <ul>
                      <li className="store-logo">
                          <img src={playstore} alt="plastore-logo" />
                      </li>
                      <li className="store-logo">
                          <img src={appstore} alt="plastore-logo" />
                      </li>
                  </ul>
              </div>
            </article>
            <article className="contact-address">
              <h1 className="title">Contact</h1>
              <span className="email">Email - support@dezyit.com</span>
              <ul>
                <li className="social-link"><a href="#instagram"><FaInstagram/></a></li>
                <li className="social-link"><a href="#facebook"><FaFacebookF/></a></li>
                <li className="social-link"><a href="#linkedin"><FaLinkedinIn/></a></li>
              </ul>
              <span className="copyright"> &copy; 2020 by Dezy It </span>
            </article>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;