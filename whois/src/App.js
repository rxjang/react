import React, { useEffect } from "react";
import Search from "./search/container/Search";
import "antd/dist/antd.css";
import { Route } from "react-router";
import User from "./user/conatiner/User";
import Login from "./auth/container/Login";
import Signup from "./auth/container/SignUp";
import { useDispatch } from "react-redux";
import { actions as authActions } from "./auth/state";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const bodyEl = document.getElementsByTagName("body")[0];
    const loadingEl = document.getElementById("init-loading");
    bodyEl.removeChild(loadingEl);
  }, []);
  useEffect(() => {
    dispatch(authActions.fetchUser());
  }, [dispatch]);

  return (
    <>
      <Route exact path="/" component={Search} />
      <Route path="/user/:name" component={User} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </>
  );
}
