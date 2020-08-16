import React from "react"
import { useHistory } from "react-router-dom"

export default function MemberSubHeader() {

  const router = useHistory()

  const handleClickAddMember = () => {
    router.push("/addMember")
  }

  return <div className="d-flex justify-content-between pl-8 pr-8 pt-5 pb-5 bg-white">
    <div class="btn-group">
      <a href="#"
        className="btn btn-warning font-weight-bold btn-sm px-3 font-size-base d-flex align-items-center dropdown-toggle"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      >
        <i class="fa fa-filter mr-2"></i>
        <span>
          개씩 정렬
        </span>
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">20 개씩 정렬</a>
        <a class="dropdown-item" href="#">40 개씩 정렬</a>
        <a class="dropdown-item" href="#">60 개씩 정렬 </a>
        <a class="dropdown-item" href="#">100 개씩 정렬</a>
      </div>
    </div>
    <div className="btn-group ml-7">
      <a href="#" className="btn btn-primary font-weight-bold btn-sm px-3 font-size-base d-flex align-items-center" onClick={handleClickAddMember}>
        <i class="fa fa-user-plus mr-2"></i>
        <span>
          회원등록
        </span>
      </a>
      {/* <i class="fa fa-download mr-2"></i>
      <div className="btn btn-success font-weight-bold btn-sm px-3 font-size-base" >회원등록</div> */}
    </div>
  </div>
}