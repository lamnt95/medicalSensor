import React from "react"
import MemberHeader from "../components/Member/MemberHeader"
import InputMember from "../components/Member/InputMember"
import MemberButton from "../components/Member/MemberButton"

export default function AddMemberScreen() {
  return <>
    <MemberHeader />
    <div className="d-flex mt-10 pl-8 pr-8 flex-column">
      <InputMember />
      <div className="mt-10">
        <MemberButton />
      </div>
    </div>
  </>
}