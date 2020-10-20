import React from 'react';
import { NavLink, Router } from 'react-router-dom';
import logo from "../images/logo.png"

const Navbar=()=>{
    return(
      
    <div className="left-menu bg-blue">
        <div className="logo-container">
          <i className="fa fa-bars menu-bars" aria-hidden="true"></i>
          <NavLink to="/">
            <img src={logo} alt="" className="logo"/>
          </NavLink>

        </div>
        <ul className="main-menu">
          <li className="menu-active "><NavLink to="/"><i className="fa fa-tachometer" aria-hidden="true"></i><span>Dashboard</span></NavLink> </li>
         <li><NavLink to="/VendorRegistration"><i className="fa fa-usd" aria-hidden="true"></i><span>VendorRegistration</span></NavLink> </li>

        </ul>
        <div className="copy-right">
          <p>Powered by Tecnics.com</p>
        </div>
      </div>
      
   
    )
}
export default Navbar;