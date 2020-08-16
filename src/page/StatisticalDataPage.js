import React from "react"
import withPanel from "../layout/withPanel"
import StatisticalDataScreen from "../screens/StatisticalDataScreen"

function StatisticalDataPage() {
  return <StatisticalDataScreen />
}

export default withPanel()(StatisticalDataPage);