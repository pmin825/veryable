import React, { useState, useEffect } from "react";
import UserIndexItem from "./UserIndexItem";

import "./UserIndex.css";

const UserIndex = () => {
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(null);

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

  const toggleActive = (e, id) => {
    e.preventDefault();
    if (active === id) {
      setActive(null);
      return;
    }
    setActive(id);
  };

  return (
    <div className="index-container">
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-icon">
            <img
              className="group-icon"
              src="./icons/group.svg"
              alt="group-icon"
            />
          </div>
          <p>USERS</p>
        </div>
      </div>
      <UserIndexItem
        users={users}
        toggleActive={toggleActive}
        active={active}
      />
    </div>
  );
};

export default UserIndex;
