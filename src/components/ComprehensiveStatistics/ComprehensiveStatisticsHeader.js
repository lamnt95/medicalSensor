import React from "react"
// import { useHistory } from "react-router-dom"
// import categoryService from "../../services/categoryService"

export default function ComprehensiveStatisticsHeader(props) {

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
        <h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5">종합 통계</h5>
      </div>
    </div>
  </div>
}

