import React, { PureComponent } from "react";
import GrandChildComp from "./GrandChildComp";

class PureComp extends PureComponent {
  state = {
    isOn: false
  };

  toggleStatus = () => {
    this.setState({
      isOn: !this.state.isOn
    });
  };

  render() {
    const { myData } = this.props;
    console.log("* Pure Component - renders!", myData);
    return (
      <div className="bg-warning p-1">
        <h2>PureComponent</h2>
        <button
          className={`btn ${this.state.isOn ? "btn-primary" : "btn-info"}`}
          onClick={this.toggleStatus}
        >
          update its own state: {this.state.isOn ? "On" : "Off"}
        </button>
        <GrandChildComp />
      </div>
    );
  }
}

export default PureComp;
