import Guirnalda from './GuirnaldasImg/Guirnalda.jpg';
import Guirnalda1 from './GuirnaldasImg/Guirnalda1.jpg';
import Guirnalda2 from './GuirnaldasImg/Guirnalda2.jpg';
import Guirnalda3 from './GuirnaldasImg/Guirnalda3.jpg';

const datosGuirnaldas = [
  {
    id: 1,
    nombre: "Guirnalda",
    imagen: Guirnalda,
    descripcion: "Guirnalda decorativa para embellecer tus espacios.",
    precio: "$12.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 2,
    nombre: "Guirnalda 1",
    imagen: Guirnalda1,
    descripcion: "Guirnalda con diseño único para dar un toque especial a tu hogar.",
    precio: "$15.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 3,
    nombre: "Guirnalda 2",
    imagen: Guirnalda2,
    descripcion: "Guirnalda festiva ideal para celebraciones y fiestas.",
    precio: "$18.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 4,
    nombre: "Guirnalda 3",
    imagen: Guirnalda3,
    descripcion: "Guirnalda brillante para iluminar tus momentos especiales.",
    precio: "$20.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  }
];

export default datosGuirnaldas;

