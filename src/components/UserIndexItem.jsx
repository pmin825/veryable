import React from "react";

import "./UserIndexItem.css";

const UserIndexItem = ({ users }) => {
  return (
    <div className="user-index-container">
      {users.map((user) => {
        return (
          <button key={user.id} className="user-card">
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
          </button>
        );
      })}
    </div>
  );
};

export default UserIndexItem;
