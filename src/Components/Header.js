import React from "react";
import { HeaderMenuItem } from "./HeaderMenuItem";

export const Header = ({
  activePage,
  onMenuClick,
  showNavbar,
  onNavMenuClick,
}) => {
  return (
    <header className="header">
      <div className="header-logo">
        Warmking
        <box-icon name="home"></box-icon>
      </div>
      <input type="checkbox" id="nav-toggle" />
      <nav className="header-nav">
        <ul id={showNavbar ? "display-nav" : ""}>
          <HeaderMenuItem
            title="Home"
            activePage={activePage}
            onMenuClick={onMenuClick}
          />
          <HeaderMenuItem
            title="Products"
            activePage={activePage}
            onMenuClick={onMenuClick}
          />
          <HeaderMenuItem
            title="Prices"
            activePage={activePage}
            onMenuClick={onMenuClick}
          />
          <HeaderMenuItem
            title="Contact"
            activePage={activePage}
            onMenuClick={onMenuClick}
          />
          <HeaderMenuItem
            title="Privacy"
            activePage={activePage}
            onMenuClick={onMenuClick}
          />
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
