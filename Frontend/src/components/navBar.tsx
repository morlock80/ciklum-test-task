import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <h1>My ToDo list</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/todos">
              ToDos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/newTodo">
              Add new todo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);