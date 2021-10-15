import './assets/css/main.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navs/Navbar';


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
      </section>
    </div>
  );
}

export default App;
