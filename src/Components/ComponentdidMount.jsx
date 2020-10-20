import React, { Component } from 'react'

import $ from "jquery"
export class ComponentdidMount extends Component {
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
            <div>
                
            </div>
        )
    }
}

export default ComponentdidMount
