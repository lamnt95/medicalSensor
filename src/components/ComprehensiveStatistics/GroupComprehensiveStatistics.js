import React from "react"
import SensorChart from "./SensorChart"

export default function GroupComprehensiveStatistics() {
  return <div class="card card-custom gutter-b">
    <div class="card-header">
      <div class="card-title">
        <h3 class="card-label">
          종합 통계
        </h3>
      </div>
    </div>
    <div class="card-body">
      <div className="d-flex flex-column">

        <div className="d-flex flex-row" >
          <div className="d-flex flex-column" style={{ flex: 1 }}>

            <div className="d-flex flex-row align-items-center mb-5">
              <div className="d-flex mr-15" style={{ width: 80 }}>연령대</div>
              <div className="d-flex dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="GroupComprehensiveStatistics_1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  나이 선택
                </button>
                <div class="dropdown-menu" aria-labelledby="GroupComprehensiveStatistics_1">
                  <a class="dropdown-item" href="#">나이 선택</a>
                  <a class="dropdown-item" href="#">나이 선택</a>
                  <a class="dropdown-item" href="#">나이 선택</a>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-5">
              <div className="d-flex mr-15" style={{ width: 80 }}>직업</div>
              <div className="d-flex dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="GroupComprehensiveStatistics_2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  직업 선택
                </button>
                <div class="dropdown-menu" aria-labelledby="GroupComprehensiveStatistics_2">
                  <a class="dropdown-item" href="#">직업 선택</a>
                  <a class="dropdown-item" href="#">직업 선택</a>
                  <a class="dropdown-item" href="#">직업 선택</a>
                </div>
              </div>
            </div>

          </div>
          <div className="d-flex flex-column" style={{ flex: 1 }}>

            <div className="d-flex flex-row align-items-center mb-5"  >
              <div className="d-flex mr-15" style={{ width: 80 }}>성별</div>
              <div class="checkbox-inline">
                <label class="checkbox">
                  <input type="checkbox" name="women" />
                  <span></span>여자</label>
                <label class="checkbox">
                  <input type="checkbox" name="men" />
                  <span></span>남자</label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-5">
              <div className="d-flex mr-15" style={{ width: 80 }}>연령대</div>
              <div className="d-flex dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="GroupComprehensiveStatistics_3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  국적
                </button>
                <div class="dropdown-menu" aria-labelledby="GroupComprehensiveStatistics_4">
                  <a class="dropdown-item" href="#">국적 선택</a>
                  <a class="dropdown-item" href="#">국적 선택</a>
                  <a class="dropdown-item" href="#">국적 선택</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="d-flex flex-row" >
          <div className="d-flex flex-column" style={{ flex: 1 }}>

            <div className="d-flex flex-row align-items-center mb-5">
              <div className="d-flex mr-15" style={{ width: 80 }}>키</div>
              <div className="d-flex dropdown mr-5">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="GroupComprehensiveStatistics_4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  키 선택
            </button>
                <div class="dropdown-menu" aria-labelledby="GroupComprehensiveStatistics_4">
                  <a class="dropdown-item" href="#">키 선택</a>
                  <a class="dropdown-item" href="#">키 선택</a>
                  <a class="dropdown-item" href="#">키 선택</a>
                </div>
              </div>
              <div class="checkbox-inline">
                <label class="checkbox">
                  <input type="checkbox" name="morethan" />
                  <span></span>여자</label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-5">
              <div className="d-flex mr-15" style={{ width: 80 }}>상체길이</div>
              <div className="d-flex dropdown mr-5">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="GroupComprehensiveStatistics_5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  상체길이 선택
            </button>
                <div class="dropdown-menu" aria-labelledby="GroupComprehensiveStatistics_5">
                  <a class="dropdown-item" href="#">상체길이 선택</a>
                  <a class="dropdown-item" href="#">상체길이 선택</a>
                  <a class="dropdown-item" href="#">상체길이 선택</a>
                </div>
              </div>
              <div class="checkbox-inline">
                <label class="checkbox">
                  <input type="checkbox" name="morethan" />
                  <span></span>여자</label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-5">
              <div className="d-flex mr-15" style={{ width: 80 }}>앉아있는 시간</div>
              <div className="d-flex dropdown mr-5">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="GroupComprehensiveStatistics_6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  시간 선택
                </button>
                <div class="dropdown-menu" aria-labelledby="GroupComprehensiveStatistics_6">
                  <a class="dropdown-item" href="#">시간 선택</a>
                  <a class="dropdown-item" href="#">시간 선택</a>
                  <a class="dropdown-item" href="#">시간 선택</a>
                </div>
              </div>
              <div className="d-flex dropdown mr-5">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="GroupComprehensiveStatistics_7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  분 선택
                </button>
                <div class="dropdown-menu" aria-labelledby="GroupComprehensiveStatistics_7">
                  <a class="dropdown-item" href="#">분 선택</a>
                  <a class="dropdown-item" href="#">분 선택</a>
                  <a class="dropdown-item" href="#">분 선택</a>
                </div>
              </div>
              <div class="checkbox-inline mr-5">
                <label class="checkbox">
                  <input type="checkbox" name="morethan" />
                  <span></span>여자</label>
              </div>
              <div class="checkbox-inline">
                <label class="checkbox">
                  <input type="checkbox" name="morethan" />
                  <span></span>이하</label>
              </div>
            </div>

          </div>
          <div className="d-flex flex-column" style={{ flex: 1 }}>

            <div className="d-flex flex-row align-items-center mb-5">
              <div className="d-flex mr-15" style={{ width: 80 }}>체중</div>
              <div className="d-flex dropdown mr-5">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="GroupComprehensiveStatistics_5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  체중
            </button>
                <div class="dropdown-menu" aria-labelledby="GroupComprehensiveStatistics_5">
                  <a class="dropdown-item" href="#">체중</a>
                  <a class="dropdown-item" href="#">체중</a>
                  <a class="dropdown-item" href="#">체중</a>
                </div>
              </div>
              <div class="checkbox-inline">
                <label class="checkbox">
                  <input type="checkbox" name="morethan" />
                  <span></span>여자</label>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-5">
              <div className="d-flex mr-15" style={{ width: 80 }}>하체길이</div>
              <div className="d-flex dropdown mr-5">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="GroupComprehensiveStatistics_5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  하체길이 선택
            </button>
                <div class="dropdown-menu" aria-labelledby="GroupComprehensiveStatistics_5">
                  <a class="dropdown-item" href="#">하체길이 선택</a>
                  <a class="dropdown-item" href="#">하체길이 선택</a>
                  <a class="dropdown-item" href="#">하체길이 선택</a>
                </div>
              </div>
              <div class="checkbox-inline">
                <label class="checkbox">
                  <input type="checkbox" name="morethan" />
                  <span></span>여자</label>
              </div>
            </div>

            <div className="d-flex flex-row ">
              <div className="d-flex mr-15" style={{ width: 80 }}></div>
              <a href="#" className="btn btn-success font-weight-bold btn-sm px-3 font-size-base d-flex align-items-center mr-10">
                <i class="fa fa-check-circle mr-2"></i>
                <span>
                  검색
              </span>
              </a>

              <a href="#" className="btn btn-warning font-weight-bold btn-sm px-3 font-size-base d-flex align-items-center">
                <i class="fa fa-window-close mr-2"></i>
                <span>
                  초기화
            </span>
              </a>
            </div>

          </div>
        </div>

      </div>
      <div className="mt-10">
        <div className="">{">   한국 > 30대 > 텔레마케터 > 남 > 키 180이상  "}</div>
        <SensorChart titleChart="chartTitle" />
      </div>
    </div>
  </div>
}