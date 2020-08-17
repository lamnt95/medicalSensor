import React from "react";
import GroupComprehensiveStatistics from "../components/ComprehensiveStatistics/GroupComprehensiveStatistics"
import ComprehensiveStatisticsHeader from "../components/ComprehensiveStatistics/ComprehensiveStatisticsHeader"

export default function ComprehensiveStatisticsScreen() {
  return <>
    <ComprehensiveStatisticsHeader />
    <div className="d-flex mt-10 pl-8 pr-8 flex-column">
      <GroupComprehensiveStatistics />
    </div>
  </>
}