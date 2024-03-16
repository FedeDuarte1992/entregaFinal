import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Seccion from "./componentes/Seccion/Seccion";
import Productos from "./componentes/Productos/Productos";
import Registro from "./componentes/Registro/Registro";
import Login from "./componentes/Login/Login";

function App() {
  return (
    <div className="contenedor">
      
      <div className="main-container">
        
        <Router><Header />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Seccion />} />
              <Route path="/Productos" element={<Productos />} />
              <Route path="/Registro" element={<Registro />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
