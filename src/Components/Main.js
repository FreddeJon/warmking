import { useContext } from "react";
import { HeaderContext } from "../Contexts/HeaderContext";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { Prices } from "../Pages/Prices";
import { Privacy } from "../Pages/Privacy";
import { Products } from "../Pages/Products";

export const Main = () => {
  const { activePage } = useContext(HeaderContext);
  return (
    <main className="main-content">
      {activePage === "Home" && <Home />}
      {activePage === "Products" && <Products />}
      {activePage === "Prices" && <Prices />}
      {activePage === "Contact" && <Contact />}
      {activePage === "Privacy" && <Privacy />}
    </main>
  );
};
