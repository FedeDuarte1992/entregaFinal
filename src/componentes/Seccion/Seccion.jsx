/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Seccion.css";




function Seccion() {
    const handlerClickBoton = () => {
        alert("Hiciste click en el botón palurdooooo");
    };



    return (
        <section className="seccion">
            
            <h2>Juana's Deco es el fruto del esfuerzo y la creatividad de Sol, una emprendedora apasionada por el arte del tejido crochet. En la ciudad de Tigre, en el año 2019, decidió dar vida a su sueño de crear un emprendimiento que reflejara su amor por el tejido y la decoración del hogar.

            Desde su inicio, Juana's Deco se ha destacado por el cuidado artesanal dedicado a cada pieza. Con su compromiso con la excelencia y su enfoque en la creación de productos únicos y encantadores.

            A través de Juana's Deco comparte su pasión por el tejido crochet, ofreciendo una amplia gama de productos artesanales que agregan un toque distintivo a cualquier hogar.</h2>
           
        </section>
    );
}

export default Seccion;
