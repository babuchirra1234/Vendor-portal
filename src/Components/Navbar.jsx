import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from 'jquery'
export class Navbar extends Component {
    componentDidMount() {
        console.log("start")
  $(".menu-bars").click(function(){
    $(".left-menu").toggleClass("collaspe-menu");
    $(".right-menu").toggleClass("collaspe-right-menu");
    $(".section").toggleClass("mlr-0");
    $(".logo, .main-menu li span, .copy-right").toggleClass("d-none");
  });
  console.log("end")
};

  render() {
    return (
      <div className="dash">
        <div className="left-menu bg-blue">
          <div className="logo-container">
            <i className="fa fa-bars menu-bars" aria-hidden="true"></i>
          </div>
          <ul className="main-menu">
            <li className="menu-active ">
              <NavLink to="/">
                <i className="fa fa-tachometer" aria-hidden="true"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/PO">
                <i className="fa fa-file-o" aria-hidden="true"></i>
                <span>PO</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Invoices">
                <i className="fa fa-file-text-o" aria-hidden="true"></i>
                <span>Invoice</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Dispute">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <span>Dispute</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/SubmittedQuotes">
                <i className="fa fa-usd" aria-hidden="true"></i>
                <span>Quotation</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/RegisteredVendors">
                <i className="fa fa-usd" aria-hidden="true"></i>
                <span>Registered Vendors</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/RFQTemplates">
                <i className="fa fa-usd" aria-hidden="true"></i>
                <span>RFQ Template</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/RFQList">
                <i className="fa fa-usd" aria-hidden="true"></i>
                <span>RFQ's</span>
              </NavLink>
            </li>
          </ul>
          <div className="copy-right">
            <p>Powered by Tecnics.com</p>
          </div>
        </div>
        <div className="section">
          <div className="col-md-12">
            <div className="info-bar bg-blue">
              <span className="info-bar-text">RFQ </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
