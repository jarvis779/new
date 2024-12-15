import "./App.css";
//Import para la navegación de la pagina, para las rutas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MedicinesPage from "./Pages/MedicinesPage";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import Footer from "./Components/Footer";
import Navbar2 from "./Components/Navbar2";

function App() {
  return (
    <>
      <Router>
        <Navbar2 />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/medicamentos" element={<MedicinesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>

      <div></div>
    </>
  );
}

export default App;
