import React from "react"
import withPanel from "../layout/withPanel"
import BasicStatisticsScreen from "../screens/BasicStatisticsScreen"

function BasicStatisticsPage() {
  return <BasicStatisticsScreen />
}

export default withPanel()(BasicStatisticsPage);