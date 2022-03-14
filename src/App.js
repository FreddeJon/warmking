import "./App.css";
import { useState } from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [showNavbar, setShowNavbar] = useState(false);

  const updateActivePage = (newPage) => {
    updateShowNavbar(false);
    setActivePage(newPage);
  };

  const updateShowNavbar = (bool) => {
    setShowNavbar(bool);
  };

  return (
    <div>
      <Header
        onMenuClick={updateActivePage}
        activePage={activePage}
        onNavMenuClick={updateShowNavbar}
        showNavbar={showNavbar}
      />
      <Main activePage={activePage} />
      <Footer />
    </div>
  );
}

export default App;
