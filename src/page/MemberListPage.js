import React from "react"
import withPanel from "../layout/withPanel"
import MemberListScreen from "../screens/MemberListScreen"

function MemberListPage() {
  return <MemberListScreen />
}

export default withPanel()(MemberListPage);