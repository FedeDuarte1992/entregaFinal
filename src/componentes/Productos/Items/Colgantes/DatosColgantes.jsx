import ColganteCactus from './ColgantesImg/ColganteCactus.jpg';
import ColganteCactus2 from './ColgantesImg/ColganteCactus2.jpg';
import ColganteCactus3 from './ColgantesImg/ColganteCactus3.jpg';
import ColganteCorazon from './ColgantesImg/ColganteCorazon.jpg';
import ColganteLlama from './ColgantesImg/ColganteLlama.jpg';
import ColganteLlama2 from './ColgantesImg/ColganteLlama2.jpg';
import ColganteMario from './ColgantesImg/ColganteMario.jpg';

const datosColgantes = [
  {
    id: 1,
    nombre: "Colgante Cactus",
    imagen: ColganteCactus,
    descripcion: "Colgante con diseño de cactus, perfecto para lucir en cualquier ocasión.",
    precio: "$12.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 2,
    nombre: "Colgante Cactus 2",
    imagen: ColganteCactus2,
    descripcion: "Otro diseño de colgante con cactus, añade un toque de estilo a tu atuendo.",
    precio: "$14.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 3,
    nombre: "Colgante Cactus 3",
    imagen: ColganteCactus3,
    descripcion: "Variante del colgante con diseño de cactus, perfecto para combinar con cualquier estilo.",
    precio: "$16.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 4,
    nombre: "Colgante Corazón",
    imagen: ColganteCorazon,
    descripcion: "Colgante con forma de corazón, ideal para expresar amor y cariño.",
    precio: "$9.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 5,
    nombre: "Colgante Llama",
    imagen: ColganteLlama,
    descripcion: "Colgante con diseño de llama, añade un toque divertido a tu look.",
    precio: "$11.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 6,
    nombre: "Colgante Llama 2",
    imagen: ColganteLlama2,
    descripcion: "Otra variante del colgante con diseño de llama, perfecto para cualquier ocasión.",
    precio: "$13.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 7,
    nombre: "Colgante Mario",
    imagen: ColganteMario,
    descripcion: "Colgante con diseño de Mario Bros, ideal para los fanáticos de los videojuegos.",
    precio: "$17.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  }
];

export default datosColgantes;
