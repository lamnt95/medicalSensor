import React from "react"
import withPanel from "../layout/withPanel"
import ComprehensiveStatisticsScreen from "../screens/ComprehensiveStatisticsScreen"

function ComprehensiveStatisticsPage() {
  return <ComprehensiveStatisticsScreen />
}

export default withPanel()(ComprehensiveStatisticsPage);