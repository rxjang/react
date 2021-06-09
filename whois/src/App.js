import React from "react";
import Search from "./search/container/Search";
import "antd/dist/antd.css";
import { Route } from "react-router";
import User from "./user/conatiner/User";

export default function App() {
  return (
    <>
      <Route exact path="/" component={Search} />
      <Route path="/user/:name" component={User} />
    </>
  );
}
