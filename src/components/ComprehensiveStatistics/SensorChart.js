import _ from "lodash";
import React from "react"
import { render } from 'react-dom';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const data = new Array(80).fill(0).map(i => ({
  name: 'sensor',
  data: [_.round(Math.random() * 100)]
}))

const options = {
  chart: {
    type: 'bar',
    height: 1500,
  },
  title: {
    text: 'Historic World Population by Region'
  },
  subtitle: {
    text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },
  xAxis: {
    categories: ['Sensor'],
    type: 'datetime',
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Population (millions)',
      align: 'high',
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    // layout: 'vertical',
    // align: 'right',
    // verticalAlign: 'top',
    // x: -40,
    // y: 80,
    // floating: true,
    // borderWidth: 1,
    // backgroundColor:
    //   Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    // shadow: true
  },
  credits: {
    enabled: false
  },
  series: data
}

export default function SensorChart(props) {
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