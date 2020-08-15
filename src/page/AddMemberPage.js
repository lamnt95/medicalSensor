import React from "react"
import withPanel from "../layout/withPanel"
import AddMemberScreen from "../screens/AddMemberScreen"

function AddMemberPage() {
  return <AddMemberScreen />
}

export default withPanel()(AddMemberPage)