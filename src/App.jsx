import React from "react";
import { useState } from "react";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css"
import { Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";


import Navbar from "./Components/Navbar";
import VendorRegistration from "./pages/admin/VendorRegistration.jsx";


import "../node_modules/font-awesome/css/font-awesome.min.css";
import Files from "../src/Components/Files";

import  LoginPage from "./pages/login/loginPage"

import { findAllByDisplayValue } from "@testing-library/react";

import ComponentdidMount from "./Components/ComponentdidMount.jsx";


const App = () => {
  
  return (

    <>
 
      <Router>
        <LoginPage/>
        {/* <ComponentdidMount/>
      <Navbar/> */}
        {/* <Switch>
          
         <Route exact path="/VendorRegistration" component={VendorRegistration}/>


          <Redirect to="/" />

        </Switch> */}
      </Router>
    </>
  );
};


export default App;
