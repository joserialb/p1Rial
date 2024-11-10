import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Importa los estilos generales de App
import './components/Navbar.css';  // Importa estilos específicos de Navbar
import './components/CartWidget.css';  // Importa estilos específicos de CartWidget
import ItemListContainer from "./components/ItemListContainer";
import NavbarBootstrap from "./components/NavbarBootstrap";

function App() {
  return (
    <div className="App">
      <NavbarBootstrap />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  )
}

export default App;
