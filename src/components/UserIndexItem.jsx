import React from "react";

import "./UserIndexItem.css";

const UserIndexItem = ({ users }) => {
  return (
    <div className="user-index-container">
      {users.map((user) => {
        return (
          <button key={user.id} className="user-card">
            <p className="user-name">{user.firstName + " " + user.lastName}</p>
            <p className={user.role}>{user.role}</p>
            <p className="user-email">{user.email}</p>
          </button>
        );
      })}
    </div>
  );
};

export default UserIndexItem;
