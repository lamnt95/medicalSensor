import _ from "lodash"
import React from "react"
import { render } from 'react-dom';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Stacked column chart'
  },
  xAxis: {
    // categories: ['10', '20', '30', '40', '50', '60', '70', '90']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Pain location'
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: ( // theme
          Highcharts.defaultOptions.title.style &&
          Highcharts.defaultOptions.title.style.color
        ) || 'gray'
      }
    }
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true
      }
    }
  },
  series: _.reverse([{
    name: 'Pain location 1',
    data: [5, 7, 20, 20, 25, 10, 15, 30]
  }, {
    name: 'Pain location 2',
    data: [8, 3, 15, 10, 15, 20, 15, 10]
  },
  {
    name: 'Pain location 3',
    data: [6, 10, 5, 8, 10, 5, 15, 20]
  },
  {
    name: 'Pain location 4',
    data: [10, 5, 10, 20, 30, 30, 10, 5]
  },
  {
    name: 'Pain location 5',
    data: [25, 15, 3, 6, 2, 3, 0, 0]
  }
  ])
}

export default function PainLocationChart(props) {
  const { titleChart, series } = props;
  const title = { text: titleChart }
  const optionsData = { ...options, title }
  return <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsData}
      id="DWEALTH-RETIRE-CHART-DETAIL"
    />
  </div>
}