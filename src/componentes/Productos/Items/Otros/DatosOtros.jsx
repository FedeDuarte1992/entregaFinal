import Alfiletero from './OtrosImg/Alfiletero.jpg';
import Estuche from './OtrosImg/Estuche.jpg';
import EstucheFrida from './OtrosImg/EstucheFrida.jpg';
import EstucheFrida1 from './OtrosImg/EstucheFrida1.jpg';
import TiteresDedos from './OtrosImg/TiteresDedos.jpg';
import TiteresDedos1 from './OtrosImg/TiteresDedos1.jpg';

const datosOtros = [
  {
    id: 1,
    nombre: "Alfiletero",
    imagen: Alfiletero,
    descripcion: "Alfiletero para guardar alfileres y agujas de costura.",
    precio: "$5.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 2,
    nombre: "Estuche",
    imagen: Estuche,
    descripcion: "Estuche práctico para guardar lápices y bolígrafos.",
    precio: "$9.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 3,
    nombre: "Estuche Frida",
    imagen: EstucheFrida,
    descripcion: "Estuche con diseño de Frida Kahlo, ideal para guardar tus accesorios.",
    precio: "$12.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 4,
    nombre: "Estuche Frida 1",
    imagen: EstucheFrida1,
    descripcion: "Estuche con diseño de Frida Kahlo, perfecto para llevar en tu bolso.",
    precio: "$14.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 5,
    nombre: "Títeres de Dedos",
    imagen: TiteresDedos,
    descripcion: "Set de títeres de dedos para entretener a los más pequeños.",
    precio: "$7.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 6,
    nombre: "Títeres de Dedos 1",
    imagen: TiteresDedos1,
    descripcion: "Set de títeres de dedos con diferentes personajes.",
    precio: "$8.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  }
];

export default datosOtros;
