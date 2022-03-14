import React from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
export const HeaderMenuItem = ({ title, activePage, onMenuClick }) => {
  return (
    <li>
      <a
        onClick={() => onMenuClick(title)}
        className={`header-nav-link ${activePage === title ? "active" : ""}`}
      >
        {title}
      </a>
    </li>
  );
};
