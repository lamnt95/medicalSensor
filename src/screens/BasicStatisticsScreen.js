import React from "react";
import GroupBasicStatistics from "../components/BasicStatistics/GroupBasicStatistics"
import BasicStatisticalHeader from "../components/BasicStatistics/BasicStatisticalHeader"

export default function BasicStatisticsScreen() {
  return <>
    <BasicStatisticalHeader />
    <div className="d-flex mt-10 pl-8 pr-8 flex-column">
      <GroupBasicStatistics />
    </div>
  </>
}