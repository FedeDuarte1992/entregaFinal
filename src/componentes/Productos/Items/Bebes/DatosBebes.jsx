import MantaDeApego from './Bebes.img/MantaDeApego.jpg';
import MantaDeApegoConejo from './Bebes.img/MantaDeApegoConejo.jpg';
import MantaDeApegoReno from './Bebes.img/MantaDeApegoReno.jpg';
import MantaDeApegoZorros from './Bebes.img/MantaDeApegoZorros.jpg';
import Portachupete from './Bebes.img/Portachupete.jpg';

const datosBebes = [
  {
    id: 1,
    nombre: "Manta de Apego",
    imagen: MantaDeApego,
    descripcion: "Manta de apego suave y cómoda para bebés.",
    precio: "$15.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 2,
    nombre: "Manta de Apego Conejo",
    imagen: MantaDeApegoConejo,
    descripcion: "Manta de apego con diseño de conejo, perfecta para bebés.",
    precio: "$19.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 3,
    nombre: "Manta de Apego Reno",
    imagen: MantaDeApegoReno,
    descripcion: "Manta de apego con diseño de reno, ideal para bebés.",
    precio: "$21.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 4,
    nombre: "Manta de Apego Zorros",
    imagen: MantaDeApegoZorros,
    descripcion: "Manta de apego con diseño de zorros, suave y acogedora.",
    precio: "$18.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 5,
    nombre: "Portachupete",
    imagen: Portachupete,
    descripcion: "Portachupete práctico y fácil de transportar para bebés.",
    precio: "$8.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  }
  // Agrega más objetos de productos aquí si es necesario
];

export default datosBebes;
