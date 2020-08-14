import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from "./page/LoginPage"
import MemberListPage from "./page/MemberListPage"
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path="/" component={() => <div>Home</div>} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/member" component={MemberListPage} exact />
    </Switch>
  </BrowserRouter>
}

export default App;
