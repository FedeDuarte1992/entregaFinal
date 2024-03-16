import Chalequito from './IndumentariaImg/Chalequito.jpg';
import Chalequito1 from './IndumentariaImg/Chalequito1.jpg';
import IndGorro from './IndumentariaImg/IndGorro.jpg';
import IndGorro2 from './IndumentariaImg/IndGorro2.jpg';
import Indumentaria2 from './IndumentariaImg/Indumentaria (2).jpg';
import Indumentaria5 from './IndumentariaImg/Indumentaria (5).jpg';
import Indumentaria11 from './IndumentariaImg/Indumentaria (11).jpg';
import Indumentaria12 from './IndumentariaImg/Indumentaria(12).jpg';
import InfGorro1 from './IndumentariaImg/InfGorro1.jpg';
import RemeritaVolados from './IndumentariaImg/RemeritaVolados.jpg';
import SweaterSweet from './IndumentariaImg/SweaterSweet.jpg';

const datosIndumentaria = [
  {
    id: 1,
    nombre: "Chalequito",
    imagen: Chalequito,
    descripcion: "Chalequito de estilo moderno y cómodo para cualquier ocasión.",
    precio: "$29.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 2,
    nombre: "Chalequito1",
    imagen: Chalequito1,
    descripcion: "Chalequito con diseño único y elegante para resaltar tu look.",
    precio: "$39.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 3,
    nombre: "IndGorro",
    imagen: IndGorro,
    descripcion: "Gorro de lana suave y abrigado para protegerte del frío.",
    precio: "$19.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 4,
    nombre: "IndGorro2",
    imagen: IndGorro2,
    descripcion: "Gorro con diseño moderno y ajuste perfecto para tu comodidad.",
    precio: "$24.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 5,
    nombre: "Indumentaria2",
    imagen: Indumentaria2,
    descripcion: "Prenda de vestir versátil y elegante para lucir en cualquier ocasión.",
    precio: "$49.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 6,
    nombre: "Indumentaria5",
    imagen: Indumentaria5,
    descripcion: "Prenda de alta calidad y diseño moderno para destacar en cualquier evento.",
    precio: "$59.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 7,
    nombre: "Indumentaria11",
    imagen: Indumentaria11,
    descripcion: "Prenda cómoda y versátil para tu día a día.",
    precio: "$39.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 8,
    nombre: "Indumentaria12",
    imagen: Indumentaria12,
    descripcion: "Prenda con diseño exclusivo y detalle de calidad para resaltar tu estilo.",
    precio: "$49.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 9,
    nombre: "InfGorro1",
    imagen: InfGorro1,
    descripcion: "Gorro de lana suave y cómodo para proteger a los más pequeños del frío.",
    precio: "$14.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 10,
    nombre: "RemeritaVolados",
    imagen: RemeritaVolados,
    descripcion: "Remera con volados elegantes y diseño moderno para lucir a la moda.",
    precio: "$34.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 11,
    nombre: "SweaterSweet",
    imagen: SweaterSweet,
    descripcion: "Sweater de calidad y diseño único para mantenerte abrigado y a la moda.",
    precio: "$44.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  }
];

export default datosIndumentaria;

