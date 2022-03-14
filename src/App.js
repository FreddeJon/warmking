import "./App.css";
import { useState } from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const updateActivePage = (newPage) => {
    setActivePage(newPage);
  };

  return (
    <div>
      <Header onMenuClick={updateActivePage} activePage={activePage} />
      <Main activePage={activePage} />
    </div>
  );
}

export default App;
