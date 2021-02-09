import React from "react";
import "./SubSideBars.css";

const SubSideBars = () => {
  return (
    <div className="SubSideBars">
      <h4>All Tasks</h4>
      <div className="subsidebar-links">
        <div className="subsidebar-link active">
            <div className="dot"></div>
            <div>Link1</div>
        </div>
      </div>
    </div>
  );
};

export default SubSideBars;
