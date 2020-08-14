import _ from 'lodash'
import React from "react"
// import { useHistory, useLocation, useParams } from "react-router-dom"

const menu = [
  {
    id: "order",
    title: "Đơn hàng",
    path: "/order"
  },
  {
    id: "product",
    title: "Sản phẩm",
    path: "/product"
  },
  {
    id: "category",
    title: "Loại Sản phẩm",
    path: "/category"
  },
  {
    id: "post",
    title: "Bài viết",
    path: "/post"
  },
  {
    id: "employee",
    title: "Nhân viên",
    path: "/employee"
  },
  {
    id: "setup",
    title: "Cài đặt",
    path: "/setup"
  },
]

function MenuItem(props) {
  const { title, path, isActive } = props || {}
  // const router = useHistory();

  const onClickItem = () => {
    console.log(title, path)
    // router.push(path)
  }
  const liClass = isActive ? "menu-item menu-item-active" : "menu-item"
  return <li className={liClass} aria-haspopup="true" onClick={onClickItem}>
    <a className="menu-link">
      <span className="svg-icon menu-icon">
      </span>
      <span className="menu-text">{title}</span>
    </a>
  </li>
}

export default function Menu() {
  // const location = useLocation() || {};
  // const { pathname } = location
  const pathname = ""
  return <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
    <div id="kt_aside_menu" className="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500">
      <ul className="menu-nav">
        {_.map(menu, menuItem => <MenuItem title={menuItem.title} key={menuItem.id} path={menuItem.path} isActive={pathname === menuItem.path} />)}
      </ul>
    </div>
  </div >
}