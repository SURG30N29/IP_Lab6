import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import profile from '../assets/profile.webp';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="#home" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <img src={logo} alt="College Logo" width="40" height="32" className="logo" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">Home</Link>
            </li>
            <li>
              <Link to="/departments" className="nav-link px-2 link-body-emphasis">Courses</Link>
            </li>
            <li>
              <Link to="/events" className="nav-link px-2 link-body-emphasis">Events</Link>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={profile} alt="Profile" width="32" height="32" className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
