import React, { Component } from "react";
import GrandChildComp from "./GrandChildComp";

class NormalComp extends Component {
  render() {
    const { myData } = this.props;
    console.log("* Normal Component - renders!", myData);
    return (
      <div className="bg-success p-1">
        <h2>Normal Component</h2>
        <GrandChildComp />
      </div>
    );
  }
}

export default NormalComp;
