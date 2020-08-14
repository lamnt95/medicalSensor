import React from "react"
import MemberHeader from "../components/Member/MemberHeader"
import MemberBasicData from "../components/Member/MemberBasicData"
import MemberIntroData from "../components/Member/MemberIntroData"
import Pagination from "../components/Pagination"

export default function MemberScreen() {
  return <>
    <MemberHeader />
    <div className="d-flex mt-10 pl-8 pr-8 flex-column">
      <MemberBasicData />
      <div className="mt-10">
        <MemberIntroData />
      </div>
      <div className="mt-10">
        <Pagination showExcelDownload />
      </div>
    </div>
  </>
}