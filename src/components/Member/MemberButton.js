import React from "react"

export default function MemberButton() {
  return <div class="card card-custom gutter-b">
    <div class="card-body d-flex justify-content-between">
      <button type="button" class="btn btn-warning">목록으로</button>
      <button type="button" class="btn btn-success">등록하기</button>
    </div>
  </div>
}