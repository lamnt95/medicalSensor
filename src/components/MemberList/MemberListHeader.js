import React from "react"
// import { useHistory } from "react-router-dom"
// import categoryService from "../../services/categoryService"

function CheckboxList() {
  return <div class="checkbox-inline">
    <label class="checkbox">
      <input type="checkbox" name="phone" />
      <span></span>휴대폰 번호</label>
    <label class="checkbox">
      <input type="checkbox" name="email" />
      <span></span>이메일 주소</label>
    <label class="checkbox">
      <input type="checkbox" name="name" />
      <span></span>이름</label>
  </div>
}


export default function MemberListHeader(props) {

  // const { category } = props;
  // const router = useHistory();

  const handleCancel = () => {
    // router.push("/category")
  }

  const handleSubmit = () => {
    // categoryService.createCategory(category).then(res => {
    //   console.log(res);
    //   router.push("/category");
    // })
  }

  return <div className="subheader py-2 py-lg-4 subheader-solid" id="kt_subheader">
    <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
      <div className="d-flex align-items-center flex-wrap mr-2">
        <h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5">검색 조건</h5>
        <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
        <CheckboxList />
        <div className="d-flex align-items-center" id="kt_subheader_search">
          <div className="ml-5">
            <div className="input-group input-group-sm input-group-solid" >
              <input type="text" className="form-control" id="kt_subheader_search_form" placeholder="찾다..." />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="flaticon2-search-1 icon-sm"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <a className="btn btn-default font-weight-bold btn-sm px-3 font-size-base" onClick={handleCancel}>
          <i class="fa fa-window-close mr-2"></i>
          <span>
            검색
          </span>
        </a>
        <div className="btn-group ml-7">
          <a className="btn btn-primary font-weight-bold btn-sm px-3 font-size-base" onClick={handleSubmit}>
            <i class="fa fa-check-circle mr-2"></i>
            <span>
              초기화
          </span>
          </a>
        </div>
      </div>
    </div>
  </div>
}

