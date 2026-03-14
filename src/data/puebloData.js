// ── Imágenes del pueblo ────────────────────────────────────────────────────
import imgVista from "../assets/Mochicahui_Vista.jpg";
import imgJudios from "../assets/Mochicahui_Judios.jpg";
import imgPlazuela from "../assets/Mochicahui_Plazuela.jpg";
import imgPrincipal from "../assets/Mochicahui_Principal.jpg";

// ── Imágenes de locales gastronómicos ──────────────────────────────────────
import imgLogoChivo from "../assets/Logo_Birrieria_ChivodeOro.jpg";
import imgPlatilloChivo from "../assets/Platillo_Birrieria_ChivodeOro.jpg";
import imgPlatillo2Chivo from "../assets/Platillo2_Birrieria_ChivodeOro.jpg";

import imgLogoMariscos from "../assets/Logo_Mariscos_ElWeroliki.jpg";
import imgPlatilloMariscos from "../assets/Platillo_Mariscos_ElWeroliki.jpg";
import imgPlatillo2Mariscos from "../assets/Platillo2_Mariscos_ElWeroliki.jpg";

import imgLogoLibier from "../assets/Logo_Pasteleria_Libier.jpg";
import imgBebidasLibier from "../assets/Bebidas_Pasteleria_Libier.jpg";

import imgCarnitasMochi from "../assets/Carnitas_Mochicachui.jpg";
import imgTortillasElena from "../assets/TortillasdeHarina_DoñaElena.jpg";

import imgFloreriaLogo from "../assets/Logo_Floreria_FloreriaVictoria.png";
import imgFloreriaFlores from "../assets/FloreriaVictoria_Flores.png";
import imgFloreriaFlores2 from "../assets/FloreriaVictoria_Flores2.png";

// ── Info general ───────────────────────────────────────────────────────────
export const infoPueblo = {
  nombre: "Mochicahui, El Fuerte",
  slogan: "Donde las tradiciones prevalecen",
  descripcionHero:
    "Descubre la magia de nuestras calles empedradas, la calidez de nuestra gente y los sabores que han perdurado por siglos.",
};

export const historia = {
  titulo: "Siglos de Tradición",
  texto1:
    "Fue fundado oficialmente como misión jesuita en 1605 bajo el nombre de San Jerónimo de Mochicahui por el Padre Andrés Pérez; considerada la capital indígena de los Yoremes-Zuaques y tiene un legado de más de 400 años.",
  texto2:
    "Su nombre proviene de la lengua cahita (Mochicahui) que significa «Cerro de la Tortuga».",
  imagenPrincipal: imgVista,
  imagenSecundaria: imgJudios,
};

export const eventos = [
  {
    id: 1,
    titulo: "Semana Santa",
    fecha: "21 Feb – 4 Abr",
    lugar: "Plazuela del Ejido",
    img: imgJudios,
    desc: "Espectáculo cultural con juegos para diversión familiar.",
  },
  {
    id: 2,
    titulo: "Domingo de Plazuela",
    fecha: "Todos los domingos",
    lugar: "Plazuela del Ejido",
    img: imgPlazuela,
    desc: "Día para divertirse en familia, pareja o amigos.",
  },
  {
    id: 3,
    titulo: "Desfile de Primavera 2026",
    fecha: "20 de Marzo",
    lugar: "Calles principales del ejido",
    img: imgPrincipal,
    desc: "Conmemoración del comienzo de la primavera.",
  },
];

export const gastronomia = [
  {
    id: 1,
    platillo: "Birria",
    descripcion:
      "La birria es un platillo tradicional mexicano hecho principalmente de chivo, carnero, o res. La carne se marina en un adobo hecho de vinagre, chiles secos, ajos, hierbas, y sal.",
    imagen: imgPlatilloChivo,
  },
  {

    id: 2,
    platillo: "Tortillas de Harina",
    descripcion:
      "Hechas a mano en comal de leña, el acompañamiento perfecto para cualquier comida sinaloense.",
    imagen: imgTortillasElena,
  },
  {
    id: 3,
    platillo: "Mariscos Frescos",
    descripcion:
      "La frescura del río y del mar en un solo platillo. Camarones, ostiones y pescados preparados al estilo sinaloense.",
    imagen: imgPlatilloMariscos,
  },
];

// ── Galería general ────────────────────────────────────────────────────────
export const galeriaImagenes = [
  { src: imgPrincipal, alt: "Calle principal de Mochicahui", span: "col-span-2 row-span-2" },
  { src: imgPlazuela, alt: "Plazuela del Ejido", span: "col-span-1 row-span-1" },
  { src: imgVista, alt: "Vista panorámica de Mochicahui", span: "col-span-1 row-span-1" },
  { src: imgJudios, alt: "Celebración de Judíos Yoremes", span: "col-span-2 row-span-1" },
  { src: imgPlatilloChivo, alt: "Birria El Chivo de Oro", span: "col-span-1 row-span-1" },
  { src: imgPlatilloMariscos, alt: "Mariscos El Wero Liki", span: "col-span-1 row-span-1" },
  { src: imgBebidasLibier, alt: "Café Libier", span: "col-span-1 row-span-1" },
  { src: imgTortillasElena, alt: "Tortillas Doña Elena", span: "col-span-1 row-span-1" },
  { src: imgFloreriaFlores, alt: "Florería Victoria", span: "col-span-2 row-span-1" },
];

export const rutaGastronomica = [
  {
    id: 1,
    nombre: "Birrieria El Chivo de Oro",
    tipo: "Birria",
    historia:
      "Rico desayuno, nada como comenzar tu día con una buena birria. Su sabor inconfundible la ha convertido en una parada obligada para locales y visitantes.",
    img: imgPlatilloChivo,
    galeria: [imgPlatilloChivo, imgPlatillo2Chivo, imgLogoChivo],
    coordenadas: "Centro Histórico",
    busquedaMapa: "Birrieria El Chivo de Oro, Mochicahui",
  },
  {
    id: 2,
    nombre: "Mariscos El Wero Liki",
    tipo: "Mariscos",
    historia:
      "Reconocido restaurante de mariscos en la región. Sus platillos frescos y su sazón sinaloense lo han posicionado como uno de los favoritos del pueblo.",
    img: imgPlatilloMariscos,
    galeria: [imgPlatilloMariscos, imgPlatillo2Mariscos, imgLogoMariscos],
    coordenadas: "Mochicahui, El Fuerte",
    busquedaMapa: "Mariscos El Wero Liki, Mochicahui",
  },
  {
    id: 3,
    nombre: "Repostería y Café Libier",
    tipo: "Postres y Café",
    historia:
      "Conocida por ser una cafetería linda con ricos pasteles y buena comida. Ideal para una primera cita o un chismecito con amigos.",
    img: imgBebidasLibier,
    galeria: [imgBebidasLibier, imgLogoLibier],
    coordenadas: "Mochicahui, El Fuerte",
    busquedaMapa: "Reposteria y Café Libier, Mochicahui",
  },
  {
    id: 4,
    nombre: "Carnitas Mochicahui",
    tipo: "Carnitas",
    historia:
      "Las auténticas carnitas del pueblo, preparadas con la receta tradicional sinaloense. Un clásico que no puedes dejar ir si visitas Mochicahui.",
    img: imgCarnitasMochi,
    galeria: [imgCarnitasMochi],
    coordenadas: "Mochicahui, El Fuerte",
    busquedaMapa: "Mochicahui, El Fuerte, Sinaloa",
  },
  {
    id: 5,
    nombre: "Tortillas de Harina Doña Elena",
    tipo: "Tortillería",
    historia:
      "Las tortillas de harina de Doña Elena son hechas a mano con amor y tradición. Suaves, esponjosas y con ese sabor casero que solo se encuentra en Mochicahui.",
    img: imgTortillasElena,
    galeria: [imgTortillasElena],
    coordenadas: "Mochicahui, El Fuerte",
    busquedaMapa: "Mochicahui, El Fuerte, Sinaloa",
  },
  {
    id: 6,
    nombre: "Florería Victoria",
    tipo: "Flores y Regalos",
    historia:
      "La florería más querida de Mochicahui. Arreglos artesanales con las flores más frescas para toda ocasión especial.",
    img: imgFloreriaFlores,
    galeria: [imgFloreriaFlores, imgFloreriaFlores2, imgFloreriaLogo],
    coordenadas: "Mochicahui, El Fuerte",
    busquedaMapa: "Floreria Victoria, Mochicahui",
  },
];
