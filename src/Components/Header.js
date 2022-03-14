import React from "react";
import { HeaderMenuItem } from "./HeaderMenuItem";

export const Header = ({
  activePage,
  onMenuClick,
  showNavbar,
  onNavMenuClick,
}) => {
  const links = [
    { title: "Home" },
    { title: "Products" },
    { title: "Prices" },
    { title: "Contact" },
    { title: "Privacy" },
  ];

  return (
    <header className="header">
      <div className="header-logo">
        Warmking
        <box-icon name="home"></box-icon>
      </div>
      <nav className="header-nav">
        <ul id={showNavbar ? "display-nav" : ""}>
          {links.map(({ title }, i) => (
            <HeaderMenuItem
              key={i}
              title={title}
              activePage={activePage}
              onMenuClick={onMenuClick}
            />
          ))}
        </ul>
      </nav>
      <div className="header-mobile-menu">
        <box-icon
          onClick={() => onNavMenuClick(!showNavbar)}
          name={showNavbar ? "x" : "menu"}
        ></box-icon>
      </div>
    </header>
  );
};
