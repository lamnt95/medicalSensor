import React from "react"

export default function InputMember() {
  return <div className="card card-custom">
    <div className="card-header d-flex align-items-center">
      <div className="card-title">
        <h3 className="card-label">
          회원 관리 등록/수정
        </h3>
      </div>
    </div>
    <div className="card-body">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th className="table-primary">성별</th>
            <td>
              <div class="checkbox-inline">
                <label class="checkbox">
                  <input type="checkbox" name="women" />
                  <span></span>여자</label>
                <label class="checkbox">
                  <input type="checkbox" name="men" />
                  <span></span>남자</label>
              </div>
            </td>
          </tr>
          <tr>
            <th className="table-primary">생년월일</th>
            <td className="d-flex flex-row align-items-center" style={{ border: "none" }}>
              <div class="form-group mb-0 mr-10 d-flex flex-row align-items-center" >
                <input type="text" class="form-control mr-3" placeholder="년" />
                <label>년</label>
              </div>
              <div class="form-group mb-0 mr-10 d-flex flex-row align-items-center">
                <input type="text" class="form-control mr-3" placeholder="월" />
                <label>월</label>
              </div>
              <div class="form-group mb-0 mr-10 d-flex flex-row align-items-center">
                <input type="text" class="form-control mr-3" placeholder="일" />
                <label>일</label>
              </div>
            </td>
          </tr>
          <tr>
            <th className="table-primary">직업</th>
            <td>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonJob" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  직업
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButtonJob">
                  <a class="dropdown-item" href="#">Job1</a>
                  <a class="dropdown-item" href="#">Job2</a>
                  <a class="dropdown-item" href="#">Job3</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th className="table-primary">앉아있는 시간</th>
            <td className="d-flex flex-row align-items-center" style={{ border: "none" }}>
              <div class="form-group mb-0 mr-10 d-flex flex-row align-items-center" >
                <input type="text" class="form-control mr-3" placeholder="시간" />
                <label>시간</label>
              </div>
              <div class="form-group mb-0 mr-10 d-flex flex-row align-items-center">
                <input type="text" class="form-control mr-3" placeholder="분" />
                <label>분</label>
              </div>
            </td>
          </tr>
          <tr>
            <th className="table-primary">통증위치</th>
            <td>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown_input_member_painlocation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  통증위치
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdown_input_member_painlocation">
                  <a class="dropdown-item" href="#">허리</a>
                  <a class="dropdown-item" href="#">목</a>
                  <a class="dropdown-item" href="#">허리와 목 둘다</a>
                  <a class="dropdown-item" href="#">그외 위치</a>
                  <a class="dropdown-item" href="#">통증없음</a>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th className="table-primary">국적</th>
            <td>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown_input_member_nationaly" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  국적
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdown_input_member_nationaly">
                  <a class="dropdown-item" href="#">USA</a>
                  <a class="dropdown-item" href="#">RUSSIA</a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
}