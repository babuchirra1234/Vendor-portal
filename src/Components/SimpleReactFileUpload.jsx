import React from 'react'
import axios, { post } from 'axios';

class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null,
      purpose:""
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  changeHandler = (e) => {
    
    this.setState({ [e.target.name]: e.target.value });
  };
  fileUpload(file){
    const url = 'http://localhost:8080/upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
           'Access-Control-Allow-Origin': '*'
        }
    }
    return  post(url, this.state,config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} name="file"/>
        <input type="text" onChange={this.changeHandler} name="purpose"/>
        <button type="submit">Upload</button>
      </form>
   )
  }
}

export default SimpleReactFileUpload;