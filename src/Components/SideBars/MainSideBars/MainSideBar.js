import React from "react";

import "./MainSideBar.css";

function Link (props) {
  return (
    <div className="link-wrapper">
      <div className={`mainSideBar-link ${props.active && "mainSideBar-link-active"}`}></div>
    </div>

  );
}

const navLinks = [{name: "Link1", isActive: true}, {name: "Link2",isActive: false}, {name: "Link3", isActive: false}]

const MainSideBar = () => {
  return (
    <div className="mainSideBar">
      <div className="mainSideBar-top-logo">
        <div className="mainSideBar-logo"></div>
      </div>
      <div className="mainSideBar-sub-links">
          {navLinks.map(item => <Link key={item.name} active={item.isActive} />)}    
      </div>
    </div>
  );
};

export default MainSideBar;
