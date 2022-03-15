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
        Warmk&#x131;ng
        <i className="bx bxs-hot header-logo-icon-flame"></i>
        <i className="bx bx-home header-logo-icon-house"></i>
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
        <i
          onClick={() => onNavMenuClick(!showNavbar)}
          className={showNavbar ? "bx bx-x" : "bx bx-menu"}
        ></i>
      </div>
    </header>
  );
};
