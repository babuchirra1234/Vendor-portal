import Axios from "axios";
import { post } from "jquery";
import React, { Component } from "react";

import ReactApexChart from "react-apexcharts";

export class Invoicechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Rdata:[],
      series: [ 44, 55, 41, 17],
      
      options: {
        chartOptions: {
          labels: ['yet to upload', 'payment credited', 'rejected', 'in process']
        },
        chart: {
          type: "donut",
      
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 100,
                
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        plotOptions: {
          pie: {
            customScale: 0.8
          }
        },
        
      
      },
      
              
    };
  }

  componentDidMount() {
		Axios
			.get('http://localhost:8080/api/findAll')
      .then
 
      (response => {
				console.log(response)
        this.setState({ series: response.data.map(post=>post.phone) })
        console.log(this.state.Rdata);
        
      
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
      })
      
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="invoice-chart-holder chart-holder">
          <div className="chart-heading">
            <span className="icon">
              <i className="fa fa-file-text-o" aria-hidden="true"></i>
            </span>
            <span className="heading-text">Invoice</span>
          </div>
          <figure className="highcharts-figure">
            <div id="invoice-chart">
              <ReactApexChart
                options={this.state.options.chartOptions}
                series={this.state.series}
                type="donut"
              />
            </div>
          </figure>
        </div>
      </div>

      
    );
  }
}

export default Invoicechart;
