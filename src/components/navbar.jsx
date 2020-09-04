import React from "react";

//stateless functional component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>{" "}
        Items
      </a>
    </nav>
  );
};

export default NavBar;
