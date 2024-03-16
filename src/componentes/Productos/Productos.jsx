import React, { useState } from 'react';
import Almohadones from './Items/Almohadones/Almohadones';
import Amigurumis from './Items/Amigurumis/Amigurumis';
import Colgantes from './Items/Colgantes/Colgantes';
import Guirnaldas from './Items/Guirnaldas/Guirnaldas';
import Indumentaria from './Items/Indumentaria/Indumentaria';
import Llaveros from './Items/Llaveros/Llaveros';
import Otros from './Items/Otros/Otros';
import Bebes from './Items/Bebes/Bebes';

import "./Productos.css";

const VentanaEmergente = ({ categoria, cerrarVentana }) => {
  let contenido;

  switch (categoria) {
    case 'Almohadones':
      contenido = <Almohadones />;
      break;
    case 'Amigurumis':
      contenido = <Amigurumis />;
      break;
    case 'Bebes':
      contenido = <Bebes />;
      break;
    case 'Colgantes':
      contenido = <Colgantes />;
      break;
    case 'Guirnaldas':
      contenido = <Guirnaldas />;
      break;
    case 'Indumentaria':
      contenido = <Indumentaria />;
      break;
    case 'Llaveros':
      contenido = <Llaveros />;
      break;
    case 'Otros':
      contenido = <Otros />;
      break;
    default:
      contenido = null;
  }

  return (
    <div className="ventana-emergente">
      {contenido}
    </div>
  );
};

const Productos = () => {
  const [categoriaAbierta, setCategoriaAbierta] = useState(null);

  const toggleCategoria = (categoria) => {
    if (categoriaAbierta === categoria) {
      setCategoriaAbierta(null); // Si la categoría está abierta, la cerramos
    } else {
      setCategoriaAbierta(categoria); // Si no está abierta, la abrimos
    }
  };

  const cerrarVentana = () => {
    setCategoriaAbierta(null);
  };

  return (
    <div className="contenedor-productos">
      <div className="main-container-productos">
        <div className="content-container-productos">
          <div className="contenido-productos">
            <div className="encabezado-productos">
              <h2>¡Bienvenido a la sección de ventas!</h2>
              <p>En esta sección podrás encontrar una amplia variedad de productos disponibles para la venta.</p>
            </div>
            <div className='lista-productos'>
              <div className="productos-Almohadones">
                <button className="categoria-btn" onClick={() => toggleCategoria('Almohadones')}>Almohadones</button>
              </div>
              <div className="productos-Amigurumis">
                <button className="categoria-btn" onClick={() => toggleCategoria('Amigurumis')}>Amigurumis</button>
              </div>
              <div className="productos-Bebes">
                <button className="categoria-btn" onClick={() => toggleCategoria('Bebes')}>Bebes</button>
              </div>
              <div className="productos-Colgantes">
                <button className="categoria-btn" onClick={() => toggleCategoria('Colgantes')}>Colgantes</button>
              </div>
              <div className="productos-Guirnaldas">
                <button className="categoria-btn" onClick={() => toggleCategoria('Guirnaldas')}>Guirnaldas</button>
              </div>
              <div className="productos-Indumentaria">
                <button className="categoria-btn" onClick={() => toggleCategoria('Indumentaria')}>Indumentaria</button>
              </div>
              <div className="productos-Llaveros">
                <button className="categoria-btn" onClick={() => toggleCategoria('Llaveros')}>Llaveros</button>
              </div>
              <div className="productos-Otros">
                <button className="categoria-btn" onClick={() => toggleCategoria('Otros')}>Otros</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {categoriaAbierta && <VentanaEmergente categoria={categoriaAbierta} cerrarVentana={cerrarVentana} />}
    </div>
  );
}

export default Productos;
