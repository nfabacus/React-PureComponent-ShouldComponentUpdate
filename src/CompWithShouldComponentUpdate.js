import React, { Component } from "react";
import GrandChildComp from "./GrandChildComp";

class CompWithShouldComponentUpdate extends Component {
  state = {
    isOn: false
  };

  toggleStatus = () => {
    this.setState({
      isOn: !this.state.isOn
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    // //Below will re-render the component if parents props are changed
    // // even if they are not directly passed to this component.
    // return nextProps !== this.props;

    // Below will re-render this component
    // only if the specific prop (this.props.myData) has changed.
    // It will not re-render even if its own state changes!
    return nextProps.myData !== this.props.myData;

    // // Below will re-render this component
    // // only if the specific prop (this.props.myData) has changed
    // // or if its own state is changed.
    // return nextProps.myData !== this.props.myData || nextState !== this.state;
  }

  render() {
    const { myData } = this.props;
    console.log("* Component with shouldComponentUpdate - renders!", myData);
    return (
      <div className="bg-danger p-1">
        <h2>Component With shouldCompoentUpdate</h2>
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

export default CompWithShouldComponentUpdate;
