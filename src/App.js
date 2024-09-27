import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={`app-container ${isMenuOpen ? "blur-background" : ""}`}>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
