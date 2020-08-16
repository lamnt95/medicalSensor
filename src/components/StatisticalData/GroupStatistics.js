import React from "react"
import PieChart from "./PieChart"
import JobChart from "./JobChart"

const series2 = [{
  name: 'Brands',
  colorByPoint: true,
  data: [{
    name: 'text',
    y: 61.41,
  }, {
    name: 'text',
    y: 11.84
  }
  ]
}]

const series3 = [{
  name: 'Brands',
  colorByPoint: true,
  data: [{
    name: 'text',
    y: 61.41,
  }, {
    name: 'text',
    y: 11.84
  }, {
    name: 'text',
    y: 10.85
  }, {
    name: 'text',
    y: 4.67
  }, {
    name: 'text',
    y: 4.18
  }
  ]
}]

const series1 = [{
  name: 'Brands',
  colorByPoint: true,
  data: [{
    name: '10',
    y: 61.41,
  }, {
    name: '20',
    y: 11.84
  }, {
    name: '30',
    y: 10.85
  }, {
    name: '40',
    y: 4.67
  }, {
    name: '50',
    y: 4.18
  }, {
    name: '60',
    y: 7.05
  }]
}]

export default function GroupStatistics() {
  return <div class="card card-custom gutter-b">
    <div class="card-body">
      <div className="d-flex flex-row justify-content-around">
        <PieChart titleChart="연령대 통계" series={series1} />
        <PieChart titleChart="성별 통계" series={series2} />
        <PieChart titleChart="통증 위치 통계" series={series3} />
      </div>
      <div className="mt-20">
        <JobChart titleChart="직업 통계" />
      </div>
    </div>
  </div>
}