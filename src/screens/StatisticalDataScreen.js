import React from "react";
import GroupStatistics from "../components/StatisticalData/GroupStatistics"
import StatisticalDataHeader from "../components/StatisticalData/StatisticalDataHeader"

export default function StatisticalDataScreen() {
  return <>
    <StatisticalDataHeader />
    <div className="d-flex mt-10 pl-8 pr-8 flex-column">
      <GroupStatistics />
    </div>
    <div>StatisticalDataScreen</div>
  </>
}