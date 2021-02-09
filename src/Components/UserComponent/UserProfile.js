import React from "react";

import "./UserProfile.css";

import image from "../../assets/image.png";

const UserProfile = (props) => {
  return (
    <div className={`user-profile ${props.hover && "user-active"}`}>
      <div className="user-profile-details">
        <div className="user-avatar">S</div>
        <div className="user-info">
          <h4>Saurabh Pathak</h4>
          <p className="user-info-email">Liocat@gmail.com</p>
          <p className="user-info-link">Go to profile</p>
        </div>
      </div>
      <div className="notification">
        <div className="user-notification">
          <div className="user-notification-info">
            <h5>work done</h5>
            <p className="user-notification-detail">
              you request is successfull
            </p>
            <button>view</button>
          </div>
          <div className="user-notification-img">
            <img
              src={image}
              height="100%"
              width="100%"
              alt="sample image"
            ></img>
          </div>
        </div>
        <div className="user-notification">
          <div className="user-notification-info">
            <h5>New Reward</h5>
            <p className="user-notification-detail">
              you request is successfull
            </p>
            <button>view</button>
          </div>
          <div className="user-notification-img">
            <img
              src={image}
              height="100%"
              width="100%"
              alt="sample image"
            ></img>
          </div>
        </div>
      </div>
      <div className="signOut">Sign Out</div>
    </div>
  );
};

export default UserProfile;
