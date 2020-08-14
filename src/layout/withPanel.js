import _ from "lodash"
import React from "react"
import Panel from "../components/Panel"
import TopBar from "../components/TopBar"
import { useLocation } from "react-router-dom"

const menu = [
  {
    id: "member",
    title: "회원관리 리스트",
    path: "/member",
  },
  {
    id: "statisticalData",
    title: "null",
    path: "/statisticalData",
  },
  {
    id: "basicStatistics",
    title: "null",
    path: "/basicStatistics",
  },
  {
    id: "comprehensiveStatistics",
    title: "null",
    path: "/comprehensiveStatistics",
  }
]

const menuKey = _.keyBy(menu, "path")

const withPanel = () => Screen => {
  function Wrapper(props) {

    const location = useLocation() || {};
    const { pathname } = location;
    const title = _.get(menuKey, `${pathname}.title`) || ""

    return <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-row flex-column-fluid page">
        <Panel />
        <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
          <div id="kt_header" className="header header-fixed">
            <div className="container-fluid d-flex align-items-stretch justify-content-between">
              <div className="header-menu-wrapper header-menu-wrapper-left d-flex align-items-center" id="kt_header_menu_wrapper">
                <div className="text-dark-60 font-size-h2">
                  {title}
                </div>
              </div>
              <TopBar />
            </div>
          </div>
          <Screen {...props} />
        </div>
      </div>
    </div>
  }
  return Wrapper
}

export default withPanel;