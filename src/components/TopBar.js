import React from "react"
import ButtonLogout from "./ButtonLogout"

export default function TopBar() {
  return <div class="topbar">
    <div class="topbar-item">
      <div class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
        <span class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Welcome, </span>
        <span class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">관리자님</span>
        <ButtonLogout />
      </div>
    </div>
  </div>
}