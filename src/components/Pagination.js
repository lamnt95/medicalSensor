import React from "react";

export default function Pagination() {
  return <div className="card card-custom">
    <div className="card-body py-7">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex">
          <a href="#" className="btn btn-primary font-weight-bold btn-sm px-3 font-size-base mr-10 d-flex align-items-center">
            <i class="fa fa-file-download mr-2"></i>
            <span>
              선택 다운로드
            </span>
          </a>
          <a href="#" className="btn btn-primary font-weight-bold btn-sm px-3 font-size-base d-flex align-items-center">
            <i class="fa fa-download mr-2"></i>
            <span>
              전체 다운로드
            </span>
          </a>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-wrap mr-3">
            <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
              <i className="ki ki-bold-double-arrow-back icon-xs"></i>
            </a>
            <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
              <i className="ki ki-bold-arrow-back icon-xs"></i>
            </a>
            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">...</a>
            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">23</a>
            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary active mr-2 my-1">24</a>
            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">25</a>
            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">26</a>
            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">27</a>
            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">28</a>
            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">...</a>
            <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
              <i className="ki ki-bold-arrow-next icon-xs"></i>
            </a>
            <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
              <i className="ki ki-bold-double-arrow-next icon-xs"></i>
            </a>
          </div>
          <div className="d-flex align-items-center">
            <select className="form-control form-control-sm text-primary font-weight-bold mr-4 border-0 bg-light-primary" style={{ width: 75 }}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
}