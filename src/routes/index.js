import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Card from "../pages/Card";
import CardNew from "../pages/CardNew";
import CardEdit from "../pages/CardEdit";
import Debtor from "../pages/Debtor";
import Abstract from "../pages/Abstract";
import Shopping from "../pages/Shopping";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/cards" exact component={Card} isPrivate />
      <Route path="/cards/new" exact component={CardNew} isPrivate />
      <Route path="/cards/edit/:_id" exact component={CardEdit} isPrivate />
      <Route path="/debtors" component={Debtor} isPrivate />
      <Route path="/abstract" component={Abstract} isPrivate />
      <Route path="/shopping" component={Shopping} isPrivate />
    </Switch>
  );
}
