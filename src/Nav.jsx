import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to={{
              pathname: '/pinterest',
              state: { modal: true },
            }}>
              Pinterest (modal)
            </Link>
          </li>

          <li>
            <Link to="/pinterest">
              Pinterest (standalone)
            </Link>
          </li>

          <li>
            <Link to={{
              pathname: '/twitter',
              state: { modal: true },
            }}>
              Twitter (modal)
            </Link>
          </li>

          <li>
            <Link to="/twitter">
              Twitter (standalone)
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
