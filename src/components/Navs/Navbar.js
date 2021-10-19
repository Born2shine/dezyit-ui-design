import { useState } from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

import logo from "../../assets/images/logo.gif"
import 'animate.css';

const Navbar = () => {
    const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)
    const location = useLocation();

    console.log(location.pathname)
    return (
        <header>
          <div className="navbar">
          <div className="logo">
            <Link to="/"> <img className="logo-img" src={logo} alt="dezy-logo" /> </Link>
          </div>
            <ul className={`links ${isMenuBarOpen ? 'show-nav' : ''} animate__animated`}>
            {
                location.pathname === '/' || location.pathname === '/blog' ? (
                  <li className="link"> <Link to="/"> Home </Link> </li>
                ) : (
                  <li className="link"><a className="active" href="#home">Home</a></li>
                )
              }
             
              <li className="link"><a href="#product">Our Product</a></li>
              <li className="link"><a href="#why-us">Why Us?</a></li>
              {
                location.pathname === '/blog' ? (
                  <li className="link"><a href="#blogs">Blogs</a></li> 
                ) : ( location.pathname === '/' &&
                  <li className="link"> <Link to="/blog"> Blogs </Link> </li>
                )
              }
              <li className="link"><a href="#contact">Contact</a></li>
            </ul>
            <label className="toggle-navbar">
              <input type="checkbox" id="menu-check" onChange={(e) => setIsMenuBarOpen(e.target.checked) } />
              <div className='bars'>
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
              </div>
            </label>
          </div>
        </header>
    )
}

export default Navbar