import { createContext } from "react";
import useActivePage from "../Hooks/useActivePage";
import useShowNav from "../Hooks/useShowNav";

const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const { activePage, setActivePage } = useActivePage();
  const { showNav, setShowNav } = useShowNav();

  const updateActivePage = (page) => {
    setActivePage(page);
    setShowNav(!showNav);
  };

  return (
    <HeaderContext.Provider
      value={{
        activePage,
        setActivePage: updateActivePage,
        showNav,
        setShowNav,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
export { HeaderContext, HeaderProvider };
