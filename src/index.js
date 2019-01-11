import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import ParentComp from "./ParentComp";

import "./styles.css";

class App extends PureComponent {
  render() {
    const a = 1;
    const b = 1;
    console.log(a === b);
    const c = { test: "abc" };
    const d = { test: "abc" };
    console.log(c === d);
    console.log("---------------------------");
    console.log(" ");
    return (
      <div>
        <ParentComp />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
