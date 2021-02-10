import React, { useState } from "react";
import UserDeails from "../../UserComponent/UserProfile";
import "./Navigation.css";

function Avater({ userName, ...props }) {
  const [user, setUser] = useState(false);

  function openUserProfile() {
    setUser(true);
    setTimeout(() => {
      setUser(false);
    }, 2000);
  }

  return (
    <div
      className="user"
      // onMouseOver={() => setUser(true)}
      // onMouseLeave={() => setUser(false)}
      onClick={openUserProfile}
    >
      <div className="avatar">{userName.toUpperCase().slice(0, 1)}</div>
      <p>{userName}</p>
      <UserDeails hover={user}/>
    </div>
  );
}

const Navigation = () => {
  return (
    <div className="mainNav">
      <div className="Nav-body">
        <div className="Nav-content">
          <Avater userName="Saurabh" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
