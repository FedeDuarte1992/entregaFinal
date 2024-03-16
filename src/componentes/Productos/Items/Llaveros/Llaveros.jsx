/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Boton from '../../../Boton/Boton';
import datosLlaveros from './DatosLlaveros';
import '../Item.css'; // Importa el nuevo archivo CSS
import './Llaveros.css'; // Importa el nuevo archivo CSS

const Llaveros = () => {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const mostrarDetalles = (producto) => {
        setProductoSeleccionado(producto);
    };

    const cerrarDetalles = () => {
        setProductoSeleccionado(null);
    };

    return (
        <div className="llaveros-container">
            <h3>Llaveros</h3>
            <div className="producto-grid-container">
                {datosLlaveros.map(producto => (
                    <div key={producto.id}>
                        <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
                        <p>{producto.nombre}</p>
                        <Boton texto="Detalles" onClick={() => mostrarDetalles(producto)} />
                    </div>
                ))}
            </div>
            {productoSeleccionado && (
                <div className="producto-detalles-overlay">
                    <div className="producto-detalles-popup">
                        <button onClick={cerrarDetalles} className="producto-cerrar-btn">Cerrar</button>
                        <h4>Detalles del Producto</h4>
                        <p>Nombre: {productoSeleccionado.nombre}</p>
                        <p>Descripción: {productoSeleccionado.descripcion}</p>
                        <p>Precio: {productoSeleccionado.precio}</p>
                        <p>Stock:{productoSeleccionado.stock}</p>
                        <img src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} className="producto-detalles-img" />
                        <Boton texto="Volver" onClick={cerrarDetalles} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Llaveros;
