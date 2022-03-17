import { useState } from "react";

const useShowNav = (bool = false) => {
  const [showNav, setShowNav] = useState(bool);

  const updateNav = (bool) => {
    setShowNav(bool);
  };

  return { showNav, setShowNav: updateNav };
};

export default useShowNav;
