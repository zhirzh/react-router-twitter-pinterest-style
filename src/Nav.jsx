import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              to={{ pathname: "/pinterest", state: { modal: true } }}
            >
              Pinterest
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to={{ pathname: "/twitter", state: { modal: true } }}
            >
              Twitter
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
