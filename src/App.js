import './assets/css/main.css';
import './assets/css/blog.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { BsChevronUp } from "react-icons/bs"

import Home from './components/Home';
import Navbar from './components/Navs/Navbar';
import Footer from './components/Footer'
import AllPost from './components/Blog/AllPost'



function App() {
  
  return (
    <div className="App">
      <section className="main">
        <Router>
          <Navbar/>
            <Switch>
              <Route exact path="/"> <Home/> </Route>
              <Route path="/blog"> <AllPost/> </Route>
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
