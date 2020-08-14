import React from "react"

export default function MemberBasicData() {
  return <div className="card card-custom">
    <div className="card-header d-flex align-items-center">
      <div className="card-title">
        <h3 className="card-label">
          기본정보
        </h3>
      </div>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          2020.07.02
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">2020.07.02</a>
          <a className="dropdown-item" href="#">2020.07.03</a>
          <a className="dropdown-item" href="#">2020.07.04</a>
        </div>
      </div>
    </div>
    <div className="card-body">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th className="table-primary">생년월일</th>
            <td>Date of birth</td>
            <th className="table-primary">성별</th>
            <td>Gender</td>
          </tr>
          <tr>
            <th className="table-primary">직업</th>
            <td>Job</td>
            <th className="table-primary">앉아있는 시간</th>
            <td>Sitting time</td>
          </tr>
          <tr>
            <th className="table-primary">통증위치</th>
            <td>Pain of Location</td>
            <th className="table-primary">국적</th>
            <td>Nationaly</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
}