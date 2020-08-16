import React from "react"
import { useHistory } from "react-router-dom"

export default function MemberButton() {
  const router = useHistory()

  const handleClose = () => {
    router.push("/member")
  }

  const handleClickSubmit = () => {
    router.push("/member")
  }

  return <div class="card card-custom gutter-b">
    <div class="card-body d-flex justify-content-between">
      <a href="#" className="btn btn-warning font-weight-bold btn-sm px-3 font-size-base d-flex align-items-center" onClick={handleClose}>
        <i class="fa fa-window-close mr-2"></i>
        <span>
          목록으로
        </span>
      </a>
      <a href="#" className="btn btn-success font-weight-bold btn-sm px-3 font-size-base d-flex align-items-center" onClick={handleClickSubmit}>
        <i class="fa fa-check-circle mr-2"></i>
        <span>
          등록하기
        </span>
      </a>
      {/* <button type="button" class="btn btn-warning">목록으로</button>
      <button type="button" class="btn btn-success">등록하기</button> */}
    </div>
  </div>
}