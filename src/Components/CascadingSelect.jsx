import React, { Component } from 'react'
import axios from 'axios'
import SelectComponent from './SelectComponent'
class CascadingSelect extends Component {
  
	constructor(props) {
		super(props)

		this.state = {
      countries: [],
      states:[],
      cities:[],
      errorMsg: '',
      
		}
	}
   getState = (e) => {
    const country= document.getElementById("country").value;
    const lkpurl='http://localhost:8080/api/LKP/';
    console.log("-----"+country)
    axios
    .get(lkpurl+'INDEX/'+country)
    .then(response => {
      console.log(response)
      this.setState({ states: response.data })
    })
  .catch(error => {
      console.log(error)
      this.setState({errorMsg: 'Error retrieving data'})
    })
  };


  getCities = (e) => {
      const selectedstate= document.getElementById("state").value;
    const lkpurl='http://localhost:8080/api/LKP/INDEX/';
    console.log("-----"+selectedstate)
    axios
    .get(lkpurl+selectedstate)
    .then(response => {
      console.log(response)
      this.setState({ cities: response.data })
    })
    .catch(error => {
      console.log(error)
      this.setState({errorMsg: 'Error retrieving data'})
    })
  };

	componentDidMount() {

    const lkpurl ="http://localhost:8080/api/LKP/";
		axios
			.get(lkpurl+"1")
			.then(response => {
				console.log(response)
				this.setState({ countries: response.data })
      })
     
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { countries,states,cities, errorMsg } = this.state;
		return (
			<div>
     
          <SelectComponent
             name="country" 
             id="country"
             onChange={this.getState} 
             list={countries} 
              dropdown="Select Country">
          </SelectComponent>

          <SelectComponent  
          id="state" 
          onChange={this.getCities}
          dropdown="Select State"
          name="state" 
            list={states}>
             </SelectComponent>

          <SelectComponent
           dropdown="Select City"
           id="city"
           name="city"
            list={cities}>
          </SelectComponent>
       
        {errorMsg ? <div>{errorMsg}</div> : null}
		
     
    {
     
    }
     </div>
    )
  }


}

export default CascadingSelect