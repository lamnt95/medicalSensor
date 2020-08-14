import React from "react"
import Brand from "./Brand"
import Menu from "./Menu"

export default function Panel() {
  return <div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside">
    <Brand />
    <Menu />
  </div>
}