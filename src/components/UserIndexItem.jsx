import React from "react";

import "./UserIndexItem.css";

const UserIndexItem = ({ users, toggleActive, active }) => {
  const generateTime = (timeInMS) => {
    let minutes = Math.floor((timeInMS / (1000 * 60)) % 60);
    let hours = Math.floor((timeInMS / (1000 * 60 * 60)) % 24) % 12;
    let amPM;

    amPM = hours > 12 ? "PM" : "AM";
    if (hours === 12) {
      hours = 12;
      amPM = "PM";
    } else if (hours === 24) {
      hours = 12;
      amPM = "AM";
    } else {
      hours = hours < 10 ? "0" + (hours % 12) : hours % 12;
    }
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + ":" + minutes + " " + amPM;
  };

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id} className="user-index-container">
            <button
              onClick={(e) => toggleActive(e, user.id)}
              key={user.id}
              className="user-card"
            >
              <div className="icon-details">
                <svg
                  className="user-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill={
                    user.role === "Administrator"
                      ? "#2081C3"
                      : user.role === "User"
                      ? "#68AAAB"
                      : "#7E7E7E"
                  }
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <div className="user-info">
                  <p className="user-name">
                    {user.firstName + " " + user.lastName}
                  </p>
                  <p className="user-role" id={user.role}>
                    {user.role}
                  </p>
                  <p className="user-email">{user.email}</p>
                </div>
              </div>
              {active === user.id ? (
                <svg
                  className="expand"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                </svg>
              ) : (
                <svg
                  className="expand"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#7E7E7E"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                </svg>
              )}
            </button>
            <div
              className="user-content"
              id={active === user.id ? "active" : null}
            >
              <div className="spacer-div"></div>
              <div className="expand-details">
                <div>
                  <p className="detail-header">Address</p>
                  <p className="detail-item">
                    {user.street + ", " + user.city + ", " + user.zip}
                  </p>
                </div>
                <div>
                  <p className="detail-header">Phone</p>
                  <p className="detail-item">
                    {"(" +
                      user.phone.slice(0, 3) +
                      ") " +
                      user.phone.slice(3, 6) +
                      "-" +
                      user.phone.slice(6)}
                  </p>
                </div>
                <div>
                  <p className="detail-header">Created At</p>
                  <p className="detail-item">
                    {parseInt(user.createdAt.slice(5, 7)).toString() +
                      "/" +
                      parseInt(user.createdAt.slice(9, 11)).toString() +
                      "/" +
                      parseInt(user.createdAt.slice(2, 4)).toString() +
                      " " +
                      generateTime(new Date(user.createdAt))}
                  </p>
                </div>
                <div>
                  <p className="detail-header">Last Logged In</p>
                  <p className="detail-item">
                    {parseInt(user.lastLoggedIn.slice(5, 7)).toString() +
                      "/" +
                      parseInt(user.lastLoggedIn.slice(9, 11)).toString() +
                      "/" +
                      parseInt(user.lastLoggedIn.slice(2, 4)).toString() +
                      " " +
                      generateTime(new Date(user.lastLoggedIn))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserIndexItem;
