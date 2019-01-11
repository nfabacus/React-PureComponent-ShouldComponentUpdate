import React from "react";

const GrandChildComp = () => {
  console.log("  * GrandChild render!");
  return (
    <div className="bg-light m-2">
      <h3>I am a grand child component</h3>
    </div>
  );
};

export default GrandChildComp;
