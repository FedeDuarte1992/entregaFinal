import AlmohadonKitty from "./AlmohadonesImg/AlmhadonKitty.jpg";
import AlmohadonCorazon from "./AlmohadonesImg/AlmohadonCorazon.jpg";
import AlmohadonCuadrado from "./AlmohadonesImg/AlmohadonCuadrado.jpg";
import AlmohadonCuadradoNombre from "./AlmohadonesImg/AlmohadonCuadradoNombre.jpg";
import Almohadones3 from "./AlmohadonesImg/Almohadones (3).jpg";
import Almohadones from "./AlmohadonesImg/Almohadones.jpg";
import AlmohadonEstrella from "./AlmohadonesImg/AlmohadonEstrella.jpg";

const datosAlmohadones = [
  {
    id: 1,
    nombre: "Almohadón Estrella",
    imagen: AlmohadonEstrella,
    descripcion: "Almohadón con forma de estrella, perfecto para decorar tu hogar.",
    precio: "$20.00",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 2,
    nombre: "Almohadón Cuadrado",
    imagen: AlmohadonCuadrado,
    descripcion: "Almohadón con diseño cuadrado, ideal para descansar en el sofá.",
    precio: "$15.50",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 3,
    nombre: "Almohadón Kitty",
    imagen: AlmohadonKitty,
    descripcion: "Almohadón con estampado de gato, adorable para cualquier habitación.",
    precio: "$18.75",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 4,
    nombre: "Almohadón Corazón",
    imagen: AlmohadonCorazon,
    descripcion: "Almohadón con forma de corazón, perfecto para expresar amor y calidez.",
    precio: "$16.90",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 5,
    nombre: "Almohadón Cuadrado con Nombre",
    imagen: AlmohadonCuadradoNombre,
    descripcion: "Almohadón con diseño cuadrado y nombre personalizado, ideal como regalo único.",
    precio: "$22.50",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 6,
    nombre: "Almohadón Genérico",
    imagen: Almohadones,
    descripcion: "Almohadón de diseño genérico, versátil para cualquier estilo de decoración.",
    precio: "$14.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 7,
    nombre: "Almohadones Variados",
    imagen: Almohadones3,
    descripcion: "Conjunto de almohadones variados para complementar tu sala de estar.",
    precio: "$32.00",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
];

export default datosAlmohadones;
