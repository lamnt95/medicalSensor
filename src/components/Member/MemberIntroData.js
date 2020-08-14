import React from "react"

function BasicInfo() {
  return <div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">키:</div>
      <div>180cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">체중: </div>
      <div>80kg</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">골반-머리: </div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">골반-어깨: </div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">골반-발: </div>
      <div>00cm</div>
    </div>
  </div>
}


function UpperBodyInfo() {
  return <div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">어깨 (T3) - 골반 (L5):</div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">견갑골 (T6) - 팔꿈치 (L30): </div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">견갑골 (T6) - 골반 (L5): </div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">팔꿈치 (L3) – 골반 (L5): </div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">팔길이: </div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">목길이: </div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">어깨 넓이: </div>
      <div>00cm</div>
    </div>
  </div>
}

function LowerBodyInfo() {
  return <div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">좌골 - 오금:</div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">엉덩이 – 무릎: </div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">엉덩이 – 오금: </div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">무릎 – 발: </div>
      <div>00cm</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">풋 스톨 팔꿈치 각도: </div>
      <div>00''</div>
    </div>
  </div>
}

function SeatPositionInfo() {
  return <div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">{"등판 위치[상]:"} </div>
      <div>2</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">{"등판 위치[하]:"} </div>
      <div>3</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">엉덩이 위치: </div>
      <div>4</div>
    </div>
    <div className="d-flex flex-row mt-3 mb-3">
      <div className="pr-2">허벅지 위치: </div>
      <div>1</div>
    </div>
  </div>
}

function Dropdown(){
  return <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    2020.07.02
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">2020.07.02</a>
    <a className="dropdown-item" href="#">2020.07.03</a>
    <a className="dropdown-item" href="#">2020.07.04</a>
  </div>
</div>
}

export default function MemberIntroData() {
  return <div className="card card-custom">
    <div className="card-header d-flex align-items-center">
      <div className="card-title">
        <h3 className="card-label">
          프로필 데이터 정보
        </h3>
      </div>
      <Dropdown/>
    </div>
    <div className="card-body">


      <table class="table table-bordered">
        <thead>
          <tr className="table-primary">
            <th scope="col">기본정보</th>
            <th scope="col">상체정보</th>
            <th scope="col">하체정보</th>
            <th scope="col">좌판위치</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <BasicInfo />
            </td>
            <td>
              <UpperBodyInfo />
            </td>
            <td>
              <LowerBodyInfo />
            </td>
            <td>
              <SeatPositionInfo />
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
}