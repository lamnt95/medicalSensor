import React from "react"
import _ from "lodash"
import { useHistory } from "react-router-dom"

const data = [
  {
    id: 1,
    no: 10,
    name: "홍길동",
    email: "Noogi_master@noogi.com",
    phone: "010-0000-0000",
    joinDate: "2019.08.26",
    loginDate: "2020.07.20"
  },
  {
    id: 2,
    no: 9,
    name: "이영희희",
    email: "adgagr245@test.com",
    phone: "010-0000-0000",
    joinDate: "2019.08.26",
    loginDate: "2020.07.20"
  },
  {
    id: 3,
    no: 8,
    name: "김철수",
    email: "Ergwgwty678!@nave.com",
    phone: "010-0000-0000",
    joinDate: "2019.08.26",
    loginDate: "2020.07.20"
  }
]

function MemberItem(props) {
  const { item } = props
  const router = useHistory();

  const handleClickItem = () => {
    router.push(`/member/${item.id}`)
  }

  return <tr>
    <th scope="row">
      <label class="checkbox">
        <input type="checkbox" name="phone" />
        <span></span>
      </label>
    </th>
    <td>{item.no}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.joinDate}</td>
    <td>{item.loginDate}</td>
    <td>
      <button type="button" class="btn btn-link" onClick={handleClickItem}>자세히</button>
    </td>
  </tr>
}

export default function MemberList() {
  return <table class="table table-bordered table-hover bg-white mt-10">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">NO</th>
        <th scope="col">이름</th>
        <th scope="col">아이디(이메일 주소)</th>
        <th scope="col">휴대폰번호</th>
        <th scope="col">가입일</th>
        <th scope="col">최근 로그인</th>
        <th scope="col">관리</th>
      </tr>
    </thead>
    <tbody>
      {_.isEmpty(data) ? null : _.map(data, item => <MemberItem item={item} key={item.id} />)}
    </tbody>
  </table>
}