import { useContext } from "react";
import { HeaderContext } from "../Contexts/HeaderContext";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenuItem } from "./HeaderMenuItem";

export const Header = () => {
  const links = [
    { title: "Home" },
    { title: "Products" },
    { title: "Prices" },
    { title: "Contact" },
    { title: "Privacy" },
  ];

  const { showNav, setShowNav } = useContext(HeaderContext);

  return (
    <header className="header">
      <HeaderLogo />
      <nav className="header-nav">
        <ul id={showNav ? "display-nav" : ""}>
          {links.map(({ title }, i) => (
            <HeaderMenuItem key={i} title={title} />
          ))}
        </ul>
      </nav>
      <div className="header-mobile-menu">
        <i
          onClick={() => {
            setShowNav(!showNav);
          }}
          className={showNav ? "bx bx-x" : "bx bx-menu"}
        ></i>
      </div>
    </header>
  );
};
