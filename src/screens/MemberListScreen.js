import React from "react";
import MemberListHeader from "../components/MemberList/MemberListHeader"
import MemberSubHeader from "../components/MemberList/MemberSubHeader"
import MemberList from "../components/MemberList/MemberList"
import Pagination from "../components/Pagination"

export default function MemberListScreen() {
  return <>
    <MemberListHeader />
    <MemberSubHeader />
    <div className="d-flex pl-8 pr-8 flex-column">
      <MemberList />
      <Pagination showFileDownload showAllDowlload />
    </div>
  </>
}