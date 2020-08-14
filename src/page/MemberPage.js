import React from "react"
import MemberScreen from "../screens/MemberScreen"
import withPanel from "../layout/withPanel"

function MemberPage() {
  return <MemberScreen />
}

export default withPanel()(MemberPage)