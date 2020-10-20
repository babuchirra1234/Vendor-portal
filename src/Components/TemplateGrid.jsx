import React, { Component , useState } from "react";
import Input from './Input'

export class TemplateGrid extends Component {
    constructor(props){
        super(props);
        this.displayData = [];
        this.state={
            column_name:"",
            field_length:"",
            field_type:"text",
            mandatory:"no"
        }
    }
    onHandleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }  

    componentDidMount(){
       // alert(this.props.id)
    }
render()
{
   return(
        <>
        <tr className="templateGrid"  id={this.props.myid}>
            <td>
               <Input 
                    type="text"
                    placeholder="Column Name"
                    value={this.state.col_name}
                    onChange={this.onHandleChange}
                    className="form-control"
                    name="col_name"
                    
                />
            </td>
            <td>
               <Input 
                    type="text" 
                    placeholder="Field Length"
                    value={this.state.field_length}
                    onChange={this.onHandleChange}
                    className="form-control"
                    name="field_length"
                />
            </td>
            <td>
               <select 
                    className="form-control"
                     value={this.state.type}
                     onChange={this.onHandleChange}
                     name="type"
               >
                   <option>Field Type</option>
                   <option>text</option>
                   <option>number</option>
                   <option>file</option>
                   <option>date</option>
               </select>
            </td>
         
            <td>
               <select    
               className="form-control"
               value={this.state.mandatory}
               onChange={this.onHandleChange}
               name="mandatory"
            >
                   <option>Mandatory</option>
                   <option>yes</option>
                   <option>no</option>
                   
               </select>
            </td>
            </tr>
        </>
    )
    
}
}


export default TemplateGrid;