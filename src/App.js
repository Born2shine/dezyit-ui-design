import './assets/css/main.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { BsChevronUp } from "react-icons/bs"

import Home from './components/Home';
import Navbar from './components/Navs/Navbar';
import Footer from './components/Footer'



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
        <Footer/>
        <div className="scroll_top">
          <BsChevronUp/>
        </div>
      </section>
    </div>
  );
}

export default App;
