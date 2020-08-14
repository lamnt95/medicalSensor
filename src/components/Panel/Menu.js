import _ from 'lodash'
import React from "react"
import { useHistory, useLocation, useParams } from "react-router-dom"

const menu = [
  {
    id: "member",
    title: "회원관리",
    path: "/member",
    icon: "users"
  },
  {
    id: "statisticalData",
    title: "통계데이타 관리",
    path: "/statisticalData",
    icon: "table"
  },
  {
    id: "basicStatistics",
    title: "기본 통계",
    path: "/basicStatistics",
    icon: "dice-d6"
  },
  {
    id: "comprehensiveStatistics",
    title: "종합 통계",
    path: "/comprehensiveStatistics",
    icon: "dice-d20"
  }
]

function MenuItem(props) {
  const { title, path, isActive, icon } = props || {}
  // const router = useHistory();

  const onClickItem = () => {
    console.log(title, path)
    // router.push(path)
  }
  const liClass = isActive ? "menu-item menu-item-active" : "menu-item"
  const iconClass = `fa fa-${icon || ""} text-primary icon-md`
  return <li className={liClass} aria-haspopup="true" onClick={onClickItem}>
    <a className="menu-link">
      <i className={iconClass}></i>
      <span className="svg-icon menu-icon">
      </span>
      <span className="menu-text">{title}</span>
    </a>
  </li>
}

export default function Menu() {
  const location = useLocation() || {};
  const { pathname } = location
  return <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
    <div id="kt_aside_menu" className="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500">
      <ul className="menu-nav">
        {_.map(menu, menuItem => <MenuItem title={menuItem.title} key={menuItem.id} path={menuItem.path} isActive={pathname === menuItem.path} icon={menuItem.icon}/>)}
      </ul>
    </div>
  </div >
}