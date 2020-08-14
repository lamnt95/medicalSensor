import React from "react"

export default function TopBar() {
  return <div class="topbar">
    <div class="topbar-item">
      <div class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
        <span class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
        <span class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">Sean</span>
        <span class="symbol symbol-35 symbol-light-success">
          <span class="symbol-label font-size-h5 font-weight-bold">S</span>
        </span>
      </div>
    </div>
  </div>
}