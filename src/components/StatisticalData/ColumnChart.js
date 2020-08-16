import React from "react"
import { render } from 'react-dom';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const options = {
  chart: {
    type: 'column'
  },
  xAxis: {
    type: 'category',
    labels: {
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'title'
    }
  },
  legend: {
    enabled: false
  },
  tooltip: {
    pointFormat: 'tooltip title'
  },
  series: [{
    name: 'Population',
    data: [
      ['2', 3],
      ['3', 5],
      ['4', 6],
      ['5', 7],
      ['6', 19],
      ['7', 0],
      ['8', 4],
      ['9', 6],
      ['10', 18],
      ['11', 5],
      ['12', 20],
      ['13', 30],
      ['14', 10],
      ['15', 5],
      ['16', 3],
      ['17', 0],
      ['18', 9],
      ['19', 6],
      ['20', 4],
    ],
    dataLabels: {
      enabled: true,
      color: '#FFFFFF',
      align: 'right',
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  }]
}

export default function ColumnChart(props) {
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