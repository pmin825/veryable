import React, { useState, useEffect } from "react";
import UserIndexItem from "./UserIndexItem";

import "./UserIndex.css";

const UserIndex = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch("./users.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div className="index-container">
      <div className="navbar">
        <div className="navbar-icon">
          <img className="left-icon" src="./icons/user.svg" alt="user-icon" />
          <img className="right-icon" src="./icons/user.svg" alt="user-icon" />
        </div>
        <p>USERS</p>
      </div>
      <UserIndexItem users={users} />
    </div>
  );
};

export default UserIndex;
