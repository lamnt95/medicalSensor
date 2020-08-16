import React from "react"
import { render } from 'react-dom';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    width: 300
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
    layout: 'vertical',
    x: 0,
    y: 100
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  }
}

export default function PieChart(props) {
  const { titleChart, series } = props;
  const title = { text: titleChart }
  const optionsData = { ...options, title, series }
  return <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsData}
      id="DWEALTH-RETIRE-CHART-DETAIL"
    />
  </div>
}