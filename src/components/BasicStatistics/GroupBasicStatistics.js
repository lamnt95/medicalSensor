import React from "react"
import CountryChart from "./CountryChart"
import PainLocationChart from "./PainLocationChart"

export default function GroupBasicStatistics() {
  return <div class="card card-custom gutter-b">
    <div class="card-body">
      <div className="mt-20">
        <CountryChart titleChart="나라 통계" />
      </div>
      <div className="mt-20">
        <PainLocationChart titleChart="연령별 통증 위치"/>
      </div>
    </div>
  </div>
}