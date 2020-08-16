import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from "./page/LoginPage"
import MemberListPage from "./page/MemberListPage"
import MemberPage from "./page/MemberPage"
import AddMemberPage from "./page/AddMemberPage"
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path="/" component={LoginPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/member" component={MemberListPage} exact />
      <Route path="/member/:memberId" component={MemberPage} exact />
      <Route path="/addMember" component={AddMemberPage} exact />
    </Switch>
  </BrowserRouter>
}

export default App;
