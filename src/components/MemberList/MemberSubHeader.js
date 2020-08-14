import React from "react"

export default function MemberSubHeader() {
  return <div className="d-flex justify-content-between pl-8 pr-8 pt-5 pb-5 bg-white">
    <div class="btn-group">
      <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">개씩 정렬</button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">20 개씩 정렬</a>
        <a class="dropdown-item" href="#">40 개씩 정렬</a>
        <a class="dropdown-item" href="#">60 개씩 정렬 </a>
        <a class="dropdown-item" href="#">100 개씩 정렬</a>
      </div>
    </div>
    <div className="btn-group ml-7">
      <button type="button" className="btn btn-success font-weight-bold btn-sm px-3 font-size-base">회원등록</button>
    </div>
  </div>
}