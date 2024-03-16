import AmiAmongas from "./AmigurumisImg/AmiAmongas.jpg";
import AmiBluey from "./AmigurumisImg/AmiBluey.jpg";
import AmiCarpincho from "./AmigurumisImg/AmiCarpincho.jpg";
import AmiCharizard from "./AmigurumisImg/AmiCharizard.jpg";
import AmiConejo from "./AmigurumisImg/AmiConejo.jpg";
import AmiGirasol from "./AmigurumisImg/AmiGirasol.jpg";
import AmiHarley from "./AmigurumisImg/AmiHarley.jpg";
import AmiLlama from "./AmigurumisImg/AmiLlama.jpg";
import AmiMafalda from "./AmigurumisImg/AmiMafalda.jpg";
import AmiMar from "./AmigurumisImg/AmiMar.jpg";
import AmiMerlina from "./AmigurumisImg/AmiMerlina.jpg";
import AmiOso from "./AmigurumisImg/AmiOso.jpg";
import AmiPaw from "./AmigurumisImg/AmiPaw.jpg";
import AmiSirena from "./AmigurumisImg/AmiSirena.jpg";
import AmiSonic from "./AmigurumisImg/AmiSonic.jpg";
import AmiZenon from "./AmigurumisImg/AmiZenon.jpg";
import AmiZorro from "./AmigurumisImg/AmiZorro.jpg";

const datosAmigurumis = [
  {
    id: 1,
    nombre: "Amigurumi Amongas",
    imagen: AmiAmongas,
    descripcion: "Amigurumi inspirado en el personaje Amongas, perfecto para los amantes de los videojuegos.",
    precio: "$25.00",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 2,
    nombre: "Amigurumi Bluey",
    imagen: AmiBluey,
    descripcion: "Amigurumi de Bluey, el popular personaje de la serie animada, adorable para niños y coleccionistas.",
    precio: "$20.50",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 3,
    nombre: "Amigurumi Carpincho",
    imagen: AmiCarpincho,
    descripcion: "Amigurumi de un carpincho, animal típico de Sudamérica, una opción única para decorar.",
    precio: "$18.75",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 4,
    nombre: "Amigurumi Charizard",
    imagen: AmiCharizard,
    descripcion: "Amigurumi del Pokémon Charizard, perfecto para fans de la serie Pokémon.",
    precio: "$22.90",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 5,
    nombre: "Amigurumi Conejo",
    imagen: AmiConejo,
    descripcion: "Amigurumi de un tierno conejo, ideal como regalo para niños y amantes de los animales.",
    precio: "$19.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 7,
    nombre: "Amigurumi Harley",
    imagen: AmiHarley,
    descripcion: "Amigurumi del famoso personaje Harley Quinn, perfecto para fans de DC Comics.",
    precio: "$28.75",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 8,
    nombre: "Amigurumi Llama",
    imagen: AmiLlama,
    descripcion: "Amigurumi de una adorable llama, ideal como compañero de peluche para niños.",
    precio: "$23.50",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 9,
    nombre: "Amigurumi Mafalda",
    imagen: AmiMafalda,
    descripcion: "Amigurumi del icónico personaje Mafalda, perfecto para nostálgicos y amantes del cómic.",
    precio: "$26.00",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 10,
    nombre: "Amigurumi Mar",
    imagen: AmiMar,
    descripcion: "Amigurumi del mar, con temática de vida marina, ideal para decoración de habitaciones temáticas.",
    precio: "$21.50",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 11,
    nombre: "Amigurumi Merlina",
    imagen: AmiMerlina,
    descripcion: "Amigurumi inspirado en el personaje de Merlina Addams, perfecto para fans de la serie.",
    precio: "$24.75",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 12,
    nombre: "Amigurumi Oso",
    imagen: AmiOso,
    descripcion: "Amigurumi de un dulce oso de peluche, ideal como regalo para ocasiones especiales.",
    precio: "$17.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 13,
    nombre: "Amigurumi Paw Patrol",
    imagen: AmiPaw,
    descripcion: "Amigurumi de los personajes de la serie animada Paw Patrol, perfecto para niños.",
    precio: "$30.00",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 14,
    nombre: "Amigurumi Sirena",
    imagen: AmiSirena,
    descripcion: "Amigurumi de una hermosa sirena, ideal como decoración en habitaciones de niñas.",
    precio: "$19.50",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 15,
    nombre: "Amigurumi Sonic",
    imagen: AmiSonic,
    descripcion: "Amigurumi del famoso personaje Sonic the Hedgehog, perfecto para fans de los videojuegos.",
    precio: "$27.50",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 16,
    nombre: "Amigurumi Zenon",
    imagen: AmiZenon,
    descripcion: "Amigurumi inspirado en el personaje Zenon, de la serie animada de Disney Channel.",
    precio: "$23.99",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  {
    id: 17,
    nombre: "Amigurumi Zorro",
    imagen: AmiZorro,
    descripcion: "Amigurumi de un lindo zorro.",
    stock: Math.floor(Math.random() * 10) + 1 // Stock aleatorio entre 1 y 10
  },
  // Agrega más objetos de productos aquí si es necesario
];


export default datosAmigurumis;
