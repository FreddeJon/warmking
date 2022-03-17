import "./App.css";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";
import { HeaderProvider } from "./Contexts/HeaderContext";

function App() {
  return (
    <HeaderProvider>
      <Header />
      <Main />
      <Footer />
    </HeaderProvider>
  );
}

export default App;
