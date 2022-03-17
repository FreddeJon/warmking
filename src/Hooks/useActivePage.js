import { useState } from "react";

const useActivePage = (initialPage = "Home") => {
  const [activePage, setActivePage] = useState(initialPage);

  return { activePage, setActivePage };
};

export default useActivePage;
