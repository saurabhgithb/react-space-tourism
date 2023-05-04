import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [collapse, setCollapse] = useState(false);
  const location = useLocation();

  return (
    <header className="primary-header flex">
      <div>
        <img
          src="/assets/shared/logo.svg"
          alt="space tourism brand icon"
          className="logo"
        />
      </div>

      <button
        onClick={() => {
          setCollapse(!collapse);
        }}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={collapse}
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          data-visible={collapse}
          className="primary-navigation underline-indicators flex"
        >
          <Link
            to="/"
            className={`${location.pathname == "/" ? "active" : ""} uppercase text-white letter-spacing-2 ff-sans-cond fs-300`}
          >
            <li
              aria-selected={location.pathname == "/" ? "true" : "false"}
            >
              <span aria-hidden="true"> 00</span>Home
            </li>
          </Link>
          <Link
            to="/destination"
            className={`${location.pathname == "/destination" ? "active" : ""} uppercase text-white letter-spacing-2 ff-sans-cond fs-300`}
          >
            <li
              aria-selected={
                location.pathname == "/destination" ? "true" : "false"
              }
            >
              <span aria-hidden="true">01</span>Destination
            </li>
          </Link>
          <Link
            to="/crew"
            className={`${location.pathname == "/crew" ? "active" : ""} uppercase text-white letter-spacing-2 ff-sans-cond fs-300`}
          >
            <li
              aria-selected={location.pathname == "/crew" ? "true" : "false"}
            >
              <span aria-hidden="true">02</span>Crew
            </li>
          </Link>
          <Link
            to="/technology"
            className={`${location.pathname == "/technology" ? "active" : ""} uppercase text-white letter-spacing-2 ff-sans-cond fs-300`}
          >
            <li
              aria-selected={
                location.pathname == "/technology" ? "true" : "false"
              }
            >
              <span aria-hidden="true">03</span>Technology
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
