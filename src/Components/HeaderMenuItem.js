import React, { useContext } from "react";
import { HeaderContext } from "../Contexts/HeaderContext";

/* eslint-disable jsx-a11y/anchor-is-valid */
export const HeaderMenuItem = ({ title }) => {
  const { activePage, setActivePage } = useContext(HeaderContext);
  return (
    <li>
      <a
        onClick={() => {
          setActivePage(title);
        }}
        href={`#${title}`}
        className={`header-nav-link ${activePage === title && "active"}`}
      >
        {title}
      </a>
    </li>
  );
};
