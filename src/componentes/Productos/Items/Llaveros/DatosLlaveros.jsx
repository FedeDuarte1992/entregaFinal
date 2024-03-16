import LlaveroCactus from './LLaverosImg/LlaveroCactus.jpg';
import LlaveroEstrella from './LLaverosImg/LlaveroEstrella.jpg';
import LlaveroFrida from './LLaverosImg/LlaveroFrida.jpg';
import LlaveroHongo from './LLaverosImg/LlaveroHongo.jpg';
import LlaveroMariposa from './LLaverosImg/LlaveroMariposa.jpg';
import LlaveroMuelita from './LLaverosImg/LlaveroMuelita.jpg';

const datosLlaveros = [
  {
    id: 1,
    nombre: "Llavero Cactus",
    imagen: LlaveroCactus,
    descripcion: "Llavero con diseño de cactus, perfecto para dar un toque de estilo a tus llaves.",
    precio: "$5.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 2,
    nombre: "Llavero Estrella",
    imagen: LlaveroEstrella,
    descripcion: "Llavero con forma de estrella, ideal para llevar tus llaves con estilo.",
    precio: "$4.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 3,
    nombre: "Llavero Frida",
    imagen: LlaveroFrida,
    descripcion: "Llavero inspirado en Frida Kahlo, perfecto para los amantes del arte y la cultura.",
    precio: "$7.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 4,
    nombre: "Llavero Hongo",
    imagen: LlaveroHongo,
    descripcion: "Llavero con diseño de hongo, divertido y original.",
    precio: "$6.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 5,
    nombre: "Llavero Mariposa",
    imagen: LlaveroMariposa,
    descripcion: "Llavero con forma de mariposa, elegante y delicado.",
    precio: "$3.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 6,
    nombre: "Llavero Muelita",
    imagen: LlaveroMuelita,
    descripcion: "Llavero con diseño de muelita, perfecto para los amantes de la odontología.",
    precio: "$5.49",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  }
];

export default datosLlaveros;
