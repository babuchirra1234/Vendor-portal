import Axios from "axios";
import { post } from "jquery";
import React, { Component } from "react";

import ReactApexChart from "react-apexcharts";

class PoChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data1:[],
      data2:[],
      series: [
        {
          name: "Net Profit",
          data: [76, 85, 101, 98],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
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
      //  this.state.series.data:response.data
        
      
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
      })
      
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="po-chart-holder chart-holder">
          <div className="chart-heading">
            <span className="icon">
              <i className="fa fa-file-o" aria-hidden="true"></i>
            </span>
            <span className="heading-text">Purchase Order (PO)</span>
          </div>

          <figure className="highcharts-figure">
            <div id="po-chart">
              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                height={350}
              />
            </div>
          </figure>
        </div>
        {/* <button value="get" onClick={this.met}/> */}
      </div>
    );
  }
}
export default PoChart;
