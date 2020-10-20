import React, { Component , useState } from "react";
import Input from "./Input";
import TextAreaComponent from "./TextAreaComponent";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Files extends Component {
  
  constructor(props) {
    super(props);
    this.displayData = [];
    this.state = {
      purpose:"",
      remarks:"",
      file: null,
      from: new Date(),
      to:new Date(),
      expiryfrom: '',
      expiryto:''
    } 
    this.handleChangeexpiryfrom = this.handleChangeexpiryfrom.bind(this);
    this.handleChangeexpiryto = this.handleChangeexpiryto.bind(this);
  }


  handleChangeexpiryfrom(date) {

    var year, month, day;
    year = String(date.getFullYear());
    month = String(date.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = String(date.getDate());
    if (day.length == 1) {
        day = "0" + day;
    }

    this.setState({    
      expiryfrom:  year + "/" + month + "/" + day,
      from:date
    })

  }
  handleChangeexpiryto(date) { 
    var year, month, day;
    year = String(date.getFullYear());
    month = String(date.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = String(date.getDate());
    if (day.length == 1) {
        day = "0" + day;
    }
    this.setState({
        expiryto:year + "/" + month + "/" + day,
        to:date
      })
  }


  changeHandler = (e) => {   
    this.setState({ [e.target.name]: e.target.value });
  };


  ChangeHandlerFile=e=>{
       this.setState({ 
        file:e.target.files[0] 
               
      });
   }

  
  upload= (e) => {

    const formData = new FormData();

    formData.append('file',this.state.file)
    formData.append('purpose',this.state.purpose)
    formData.append('remarks',this.state.remarks)
    formData.append('expiryfrom',this.state.expiryfrom)
    formData.append('expiryto',this.state.expiryto)

     console.log(formData)

    const config ={
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': 'http://localhost:8080/upload',
        contentType: false,
     }
    }
     
    axios
      .post("http://localhost:8080/upload",formData ,config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });


  };
render(){
  return(
    <>     
    <form>
    <div className="attachment-box col-md-12">    


    <Input 
      rowWidth="col-md-3" 
      type="text"   
      placeholder="Attachment Name :" 
      name="purpose"  
      onChange={this.changeHandler}
    />   
 

 <div className='col-md-3'>
          <DatePicker
              selected={ this.state.from }
              onChange={ this.handleChangeexpiryfrom }
              name="expiryfrom"
              dateFormat="yyyy/MM/dd"
             
          />
          </div>
        <div className='col-md-3'>
        <DatePicker
              selected={ this.state.to }
              onChange={ this.handleChangeexpiryto }
              name="expiryto"
              dateFormat="yyyy/MM/dd"
            
          />
          </div>
          
          <Input 
              rowWidth="col-md-3"
                type="file"
                name="file" 
                onChange={this.ChangeHandlerFile}
            />
          <TextAreaComponent
            placeholder="Remarks"
             name="remarks"
               onChange={this.changeHandler}>
          </TextAreaComponent>
                    
        <div className="col-md-3">
          <button className="my-btn2 " onClick={this.upload} > Upload </button> 
          <button className="my-btn2" type="reset" >Discard </button>
        </div>
  
    </div>
    </form>
    </>
)

}
 
   
}

export default Files;