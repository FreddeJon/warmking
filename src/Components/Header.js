import React from "react";
import { HeaderMenuItem } from "./HeaderMenuItem";

export const Header = ({ activePage, onMenuClick }) => {
  return (
    <header className="header">
      <div className="header-logo">
        Warmking
        <box-icon name="home"></box-icon>
      </div>
      <input type="checkbox" id="nav-toggle" />
      <nav className="header-nav">
        <ul>
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
        <label htmlFor="nav-toggle">Menu</label>
      </div>
    </header>
  );
};
