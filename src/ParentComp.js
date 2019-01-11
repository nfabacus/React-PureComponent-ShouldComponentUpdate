import React, { Component } from "react";
import NormalComp from "./NormalComp";
import PureComp from "./PureComp";
import CompWithShouldComponentUpdate from "./CompWithShouldComponentUpdate";

class ParentComp extends Component {
  state = {
    count: 0,
    itemNotToChange: { greeting: "hello" }
  };

  handleClick = () => {
    this.setState(({ count, itemNotToChange }) => {
      count = count + 1;
      return {
        count: count
      };
    });
  };

  render() {
    console.log("---------------------------");
    console.log("ParentComp render");
    console.log("---------------------------");
    return (
      <div className="App p-4">
        <h1>Pure Component / ShouldComponentUpdate</h1>
        <p>{this.state.count}</p>

        <h3>Normal Component with props</h3>
        <NormalComp myData={this.state.itemNotToChange} />
        <br />

        <h3>Normal Component with NO props</h3>
        <NormalComp />
        <br />

        <h3>Pure Component with props</h3>
        <PureComp myData={this.state.itemNotToChange} />

        <br />
        <h3>Component with shouldComponentUpdate</h3>
        <CompWithShouldComponentUpdate myData={this.state.itemNotToChange} />
        <button className="btn btn-primary m-3" onClick={this.handleClick}>
          Change data
        </button>
      </div>
    );
  }
}

export default ParentComp;
