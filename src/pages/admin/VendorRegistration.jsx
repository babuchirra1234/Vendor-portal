import React, { Component } from "react";
import axios from "axios";
import "../../Components/Styles/Style.css";
import logo from "../../images/logo.png";
import "../../images/dashboard.png";
import "../../images/bg.jpg";
import Input  from "../../Components/Input";
import VendorAttachments from "../../Components/VendorAttachments"
import CascadingSelect from "../../Components/CascadingSelect";
import TextAreaComponent from "../../Components/TextAreaComponent";
import "jquery/dist/jquery.min";
import $ from 'jquery';
import Select from "react-dropdown-select";

export class VendorRegistration extends Component {
 
  constructor(props) {
    super();
    this.displayData = [];
    this.fileCounter=0;
    this.state = {
      vendor_id: "",
      vendor_code: "",
      company_name: "",
      company_id: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zip: 0,
      aboutcompany: "",
      typeofbusiness: "",
      contact_name1: "",
      contact_email1: "",
      contact_number1: "",
      contact_name2: "",
      contact_email2: "",
      contact_number2: "",
      gst: "",
      bankaccount_number: "",
      bank_ifsccode: "",
      pan_number: "",
      typeof_ownership: "",
      websiteurl: "",
      attachement_id: "",
      company_id: "",       
      showdata : this.displayData,
      postVal : "",
      selectedFile: null
    };
    this.newAttachmentSection = this.newAttachmentSection.bind(this);
    this.register=this.register.bind(this)
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]:  e.target.value});
  };
blurHandlerString=(e)=>
{  
  if(e.target.value==""){
    e.target.className = e.target.className + " " +"errorInput";
  }
  else{
    e.target.className  ="form-control";
  }
    
};

blurHandlerNumber=(e)=>
{  
  if(e.target.value=="" || isNaN(e.target.value)){
    e.target.className = e.target.className + " " +"errorInput";
  }
  else{
    e.target.className  ="form-control";
  }
};
  register = (e) => {
    if(document.getElementsByClassName("errorInput").length>0){
      alert("Please fill all required data");
      return
    }

    e.preventDefault();
    
   const countryelement=document.getElementById("country");
   const stateelement=document.getElementById("state");
   const cityelement=document.getElementById("city");

    this.state.country = countryelement.options[countryelement.selectedIndex].text;
    this.state.state = stateelement.options[stateelement.selectedIndex].text;
    this.state.city = cityelement.options[cityelement.selectedIndex].text;

   
    axios
      .post("http://localhost:8080/api/VENDOR", this.state, {
        "proxy": "http://localhost:3000"
      })
      .then((response) => {
        alert("Vendor Id Generated Successfully - "+response.data.vendor_id)
        document.getElementById("vendor_id").value=response.data.vendor_id;
        for(let i=0;i<document.getElementsByClassName("hideme").length;i++){
          document.getElementById("file_"+i).click()

        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  resetform =(e) =>{
  document.getElementsByTagName("input").value="";
  };

  componentDidMount(){
    this.displayData.push(<VendorAttachments id="file_0"/>);
    this.setState({
       showdata : this.displayData,
       postVal : ""
    });   
    let list= <utili/>
  }
  render() {
    const {
      vendor_id,
      vendor_code,
      company_name,
      company_id,
      address,
      country,
      state,
      city,
      zip,
      aboutcompany,
      typeofbusiness,
      contact_name1,
      contact_email1,
      contact_number1,
      contact_name2,
      contact_email2,
      contact_number2,
      gst,
      bankaccount_number,
      bank_ifsccode,
      pan_number,
      typeof_ownership,
      websiteurl,
      attachement_id
    } = this.state;
    return (
      <div>
        <main className="registration">
          <div className="left">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <h1>Vendor Portal Registration</h1>
            <h5>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying ou print, graphic or web designs.
            </h5>
          </div>
            <div className="right">
              <h1 className="color-blue">Vendor Portal Registration</h1>
              <h5>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying ou print, graphic or web designs.
              </h5>
             
              <h2 className="color-blue reg1">Create Your Account</h2>
              <div className="vendor-details">
                <div className="bar blue-gradient">
                  <h4>Vendor Details</h4>
                </div>
                <input type="hidden" id="vendor_id" />
                  <Input rowWidth="col-md-4"
                  type="text"
                  name="company_name"
                  onChange={this.changeHandler }
                  placeholder="Company Name"
                  onBlur={this.blurHandlerString}
                  value={this.state.company_name}
                ></Input>
                <Input rowWidth="col-md-4"
                  type="text"
                  name="company_id"
                  onChange={this.changeHandler}
                  placeholder="Company ID"
                  onBlur={this.blurHandlerNumber}

                ></Input >
                <Input rowWidth="col-md-4"
                  type="text"
                  name="address"
                  onChange={this.changeHandler}
                  onBlur={this.blurHandlerString}
                  placeholder="Address"
                ></Input >               
                <Input rowWidth="col-md-4"
                  type="text"
                  name="zip"
                  onChange={this.changeHandler}
                  onBlur={this.blurHandlerNumber}
                  placeholder="Zip Code"
                />
                <Input rowWidth="col-md-4"
                  type="text"
                  onChange={this.changeHandler}
                  name="aboutcompany"
                  placeholder="About Company"
                  onBlur={this.blurHandlerString}
                />
                <Input rowWidth="col-md-4"
                  type="text"
                  onChange={this.changeHandler}
                  name="typeofbusiness"
                  placeholder="Type of Business"
                  onBlur={this.blurHandlerString}

                />
                <CascadingSelect/>
                <Input rowWidth="col-md-4"
                  type="text"
                  name="websiteurl"
                  onChange={this.changeHandler}
                  placeholder="Website URL"
                  onBlur={this.blurHandlerString}
                />
                <Input rowWidth="col-md-4"
                  type="text"
                  name="gst"
                  onChange={this.changeHandler}
                  placeholder="GST"
                  onBlur={this.blurHandlerNumber}
                />
                <Input rowWidth="col-md-4"
                  type="text"
                  onChange={this.changeHandler}
                  placeholder="PAN Number"
                  name="pan_number"
                  onBlur={this.blurHandlerNumber}
                />

                <Input rowWidth="col-md-4"
                  type="text"
                  onChange={this.changeHandler}
                  placeholder=" Bank Account Number"
                  name="bankaccount_number"
                  onBlur={this.blurHandlerNumber}

                />
                <Input rowWidth="col-md-4"
                  type="text"
                  onChange={this.changeHandler}
                  placeholder="Bank IFSC code"
                  name="bank_ifsccode"
                   onBlur={this.blurHandlerNumber}

                />
                <Input rowWidth="col-md-4"
                  type="text"
                  onChange={this.changeHandler}
                  placeholder="Type of Ownership"
                  name="typeof_ownership"
                  onBlur={this.blurHandlerString}
                />
              </div> 
                <div className="clearfix"></div>
                <div className="contact-details">
                  <div className="bar blue-gradient">
                    <h4>Contact Details</h4>
                  </div>
                  <Input rowWidth="col-md-4"
                    type="text"
                    onChange={this.changeHandler}
                    placeholder="Name 1 "
                    name="contact_name1"
                    onBlur={this.blurHandlerString}

                  />
                  <Input rowWidth="col-md-4"
                    type="email"
                    onChange={this.changeHandler}
                    placeholder="Email-ID 1 "
                    name="contact_email1"
                   onBlur={this.blurHandleremail}

                  />
                  <Input rowWidth="col-md-4"
                    type="text"
                    onChange={this.changeHandler}
                    placeholder="Number 1"
                    name="contact_number1"
                    onBlur={this.blurHandlerNumber}
                  />
                  <Input rowWidth="col-md-4"
                    type="text"
                    onChange={this.changeHandler}
                    placeholder="Name 2"
                    name="contact_name2"
                    onBlur={this.blurHandlerString}
                  />
                  <Input rowWidth="col-md-4"
                    type="text"
                    onChange={this.changeHandler}
                    placeholder="Email-ID 2"
                    name="contact_email2"
                    onBlur={this.blurHandleremail}
                  />
                  <Input rowWidth="col-md-4"
                    type="text"
                    onChange={this.changeHandler}
                    placeholder="Number 1"
                    name="contact_number2"
                    onBlur={this.blurHandlerNumber}

                  />

                </div>
                <div className="clearfix"></div>
                <div className="attachements">
                  <div className="bar blue-gradient">
                    <h4>Attachments</h4>
                  </div>
                  </div>
            
            <div id="display-data-Container">
             {this.displayData}
             </div>
            <div className="col-md-12">
              <i className="fa fa-plus-circle pull-right color-blue reg2" aria-hidden="true" onClick={this.newAttachmentSection} > </i>
              <span className="pull-right color-blue">Add more</span>
            </div>
            <div className="col-md-12 reg3">
              <button className="my-btn color-blue register-btn" type="button" onClick={this.register} >    Register   </button>
              <button className="my-btn color-red discard-btn reg4"  type="reset" onClick={this.resetform}>Discard</button>
            </div>
            
         </div>
        </main >
      </div >    
    );
    
  }
  newAttachmentSection () {
    this.fileCounter =this.fileCounter+1;
   const myid = "file_"+this.fileCounter;
    this.displayData.push(<VendorAttachments id={myid} />);
    this.setState({
       showdata : this.displayData,
       postVal : ""
    });   
  };

  
}


export default VendorRegistration;
