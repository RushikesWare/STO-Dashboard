import React from "react";
import BackNavigation from "./BackNavigation";

function NoPageFound() {
  return (
    <div className="main-container">
      <BackNavigation></BackNavigation>
      <h2>No Page Found..!</h2>
    </div>
  );
}

export default NoPageFound;
