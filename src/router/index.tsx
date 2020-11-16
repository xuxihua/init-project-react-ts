/*
 * @Descripttion: router
 * @Author: xxh
 * @Date: 2020-11-13 15:58:27
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-16 15:09:04
 */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../containers/pages/home";
import Detail from "../pages/detail";

const BasicRoute = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </Router>
);

export default BasicRoute;
