//Declaro constantes para crear las diferentes secciones de la página y recuperar las del html con las que vamos a trabajar.

const seccionHero = document.createElement("section");
const seccionesPagina = document.createElement("section");
const Descuentos = document.createElement("section");
const Opiniones = document.createElement("section");
const documento = document.querySelector("main");

//creo el menú hamburguesa para el desplegable.
const header = document.querySelector("header");
const menuButton = document.querySelector("#menuButton")
const generalMenu = document.createElement("ol");


const menuSections = [
  {
    name: "Componentes",
    img: "./assets/componentes.png",
    link: "https://ultimainformatica.com/componentes",
  },
  {
    name: "Ordenadores",
    img: "./assets/ordenadores.png",
    link: "https://ultimainformatica.com/ordenadores",
  },
  {
    name: "Periféricos",
    img: "./assets/perifericos.png",
    link: "https://ultimainformatica.com/perifericos",
  },
  {
    name: "Monitores",
    img: "./assets/monitores.png",
    link: "https://ultimainformatica.com/monitores",
  },
  {
    name: "Smartphones, Tablets",
    img: "./assets/smartphones.png",
    link: "https://ultimainformatica.com/tablet-smartphone-y-smartwatch/",
  },
  {
    name: "Redes",
    img: "./assets/redes.png",
    link: "https://ultimainformatica.com/redes/",
  },
  {
    name: "Imagen y sonido",
    img: "./assets/imagenysonido.png",
    link: "https://ultimainformatica.com/imagen-y-sonido/",
  },
  {
    name: "Videojuegos y robótica",
    img: "./assets/videojuegos.png",
    link: "https://ultimainformatica.com/videojuegos-y-robotica/",
  },
];

for (let i = 0; i < menuSections.length; i++) {
  const menuElement = document.createElement("li");
  const imageElement = document.createElement("img");
  const LinkElement = document.createElement("a");
  imageElement.setAttribute("src", menuSections[i].img);
  imageElement.setAttribute("src", menuSections[i].img);
  menuElement.appendChild(imageElement);
  LinkElement.textContent = menuSections[i].name;
  menuElement.appendChild(LinkElement);
  generalMenu.appendChild(menuElement);
}

header.insertAdjacentElement("afterend", generalMenu);
const listButton = document.querySelector ("header + ol");
listButton.classList.add("hamDisable");

menuButton.addEventListener(
  "click", () => {
    listButton.classList.toggle("hamDisable");
    listButton.classList.toggle("hamEnable");
  }
);

//Establezco id´s por defecto dependiendo de como cargue la página la primera vez.

if (window.innerWidth >= 768) {
  seccionHero.setAttribute("id", "hero-desktop");
  seccionesPagina.setAttribute("id", "secciones-desktop");
} else {
  seccionHero.setAttribute("id", "hero-mobile");
  seccionesPagina.setAttribute("id", "secciones-mobile");
}

seccionesPagina.setAttribute("class", "secciones");
Descuentos.setAttribute("id", "descuentos");
Opiniones.setAttribute("id", "Opiniones");

//Se añade un eventlistener para que cambie los id dependiendo del tamaño de la página.

window.addEventListener(
  "resize",
  (Redimension = () => {
    if (window.innerWidth >= 768) {
      seccionHero.setAttribute("id", "hero-desktop");
      seccionesPagina.setAttribute("id", "secciones-desktop");
    } else {
      seccionHero.setAttribute("id", "hero-mobile");
      seccionesPagina.setAttribute("id", "secciones-mobile");
    }
  })
);

//El hero de la página y la organización dinámica de lo que lo compone dependiendo del estilo de la página (móvil o escritorio).

const heroElements = {
  imagen1: "./assets/cholas.png",
  imagen2: "./assets/promocion.png",
  enlace: "https://ultimainformatica.com/en-cholas-y-a-jugar",
};

const cajaHero = document.createElement("div");
const imagenHeroCholas = document.createElement("img");
const enlaceHero = document.createElement("a");
const imagenHeroPromo = document.createElement("img");

imagenHeroCholas.setAttribute("id", "cholas");
imagenHeroCholas.setAttribute("src", heroElements.imagen1);
imagenHeroCholas.setAttribute("alt", "en cholas y a jugar");
enlaceHero.setAttribute("href", heroElements.enlace);
enlaceHero.setAttribute("rel", "noopener");
enlaceHero.textContent = "Ver Ofertas";
imagenHeroPromo.setAttribute("id", "promocion");
imagenHeroPromo.setAttribute("src", heroElements.imagen2);
imagenHeroPromo.setAttribute("alt", "ofertas de verano");
cajaHero.appendChild(imagenHeroCholas);
cajaHero.appendChild(enlaceHero);

if (window.innerWidth >= 768) {
  seccionHero.appendChild(cajaHero);
  seccionHero.appendChild(imagenHeroPromo);
} else {
  seccionHero.appendChild(imagenHeroPromo);
  seccionHero.appendChild(cajaHero);
}

//Las secciones de la página.

const sections = [
  {
    name: "PC Gaming Última",
    src: "https://ultimainformatica.com/ultima-pc-gaming/",
    image: "./assets/gamingD.jpeg",
  },
  {
    name: "PC Oficial CD Tenerife",
    src: "https://ultimainformatica.com/pc-gaming-ultima-pba-cd-tenerife",
    image: "./assets/tenerifeD.jpeg",
  },
  {
    name: ".Todo en periféricos",
    src: "https://ultimainformatica.com/perifericos",
    image: "./assets/perifericoD.jpeg",
  },
  {
    name: "Los mejores Monitores",
    src: "https://ultimainformatica.com/monitores/#/s/monitores/f/en-oferta:si",
    image: "./assets/monitorD.jpeg",
  },
];

for (let i = 0; i < sections.length; i++) {
  const enlaceSeccion = document.createElement("a");
  const imagenSeccion = document.createElement("img");
  enlaceSeccion.setAttribute("href", sections[i].src);
  enlaceSeccion.setAttribute("rel", "noopener");
  imagenSeccion.setAttribute("class", "seccion");
  imagenSeccion.setAttribute("src", sections[i].image);
  imagenSeccion.setAttribute("alt", sections[i].name);
  enlaceSeccion.appendChild(imagenSeccion);
  seccionesPagina.appendChild(enlaceSeccion);
}

//Los productos de la página.

const products = [
  {
    name: "PC Última Office Lite | i3 13100F/ 8GB/ GT 1030 2gb/ 256GB",
    newPrice: "551,99€",
    oldPrice: "599,99€",
    seller: "Última Informática",
    image: "./assets/articulo1.webp",
    href: "https://ultimainformatica.com/pc-ultima-office-lite-i3-13100f-8gb-gt-1030-2gb-256gb.html",
    discount: "-8%",
    shipping: "Envío gratis",
  },
  {
    name: "PC Gaming Última Evo | Ryzen 5 5600X / RTX 4060 TI 8GB / 16GB RAM / 1TB M.2 / Windows 11 Pro (S3)",
    newPrice: "1.232,00€",
    oldPrice: "1.400,00€",
    seller: "Última Informática",
    image: "./assets/articulo2.webp",
    href: "https://ultimainformatica.com/pc-gaming-ultima-evo-s3.html",
    discount: "-12%",
    shipping: "Envío gratis",
  },
  {
    name: "PC Gaming Última Viridia | Intel Core i7 13700F / RTX 4060 TI 8GB / 32GB DDR5 / 1TB M.2 / Windows 11 Pro (S2)",
    newPrice: "1.573,20€",
    oldPrice: "1.710,00€",
    seller: "Última Informática",
    image: "./assets/articulo3.webp",
    href: "https://ultimainformatica.com/pc-gaming-ultima-viridia-s2.html",
    discount: "-8%",
    shipping: "Envío gratis",
  },
  {
    name: "PC Gaming Última Mega | Intel Core i5 12400F / RTX 4070 12GB / 16GB RAM / 1TB M.2 / Windows 11 Pro (S1)",
    newPrice: "1.615,68€",
    oldPrice: "1.836,00€",
    seller: "Última Informática",
    image: "./assets/articulo4.webp",
    href: "https://ultimainformatica.com/pc-gaming-ultima-mega-s1.html",
    discount: "-12%",
    shipping: "Envío gratis",
  },
  {
    name: "PC Gaming Última Hyperion | Intel Core i7 13700KF / RTX 4080 16GB / 32GB DDR4 / 1TB M.2 / Windows 11 Pro",
    newPrice: "3.542,00€",
    oldPrice: "3.650,00€",
    seller: "Última Informática",
    image: "./assets/articulo5.webp",
    href: "https://ultimainformatica.com/pc-gaming-ultima-pba-hyperion.html",
    discount: "-8%",
    shipping: "Envío gratis",
  },
  {
    name: "PC Gaming Última Obsidian | Intel Core i5 13400F / RTX 4070 12GB / 32GB DDR5 / 1TB M.2 / 960GB SSD / Windows 11 Pro",
    newPrice: "2.023,08€",
    oldPrice: "2.199,00€",
    seller: "Última Informática",
    image: "./assets/articulo6.jpeg",
    href: "https://ultimainformatica.com/pc-gaming-ultima-obsidian.html",
    discount: "-8%",
    shipping: "Envío gratis",
  },
  {
    name: "PC Gaming Última Pro| Intel Core i5 13400F / RTX 4070 TI 12GB / 32GB DDR5 / 2TB M.2 / Windows 11 Pro (S2)",
    newPrice: "2.077,88€",
    oldPrice: "2.534,00€",
    seller: "Última Informática",
    image: "./assets/articulo7.webp",
    href: "https://ultimainformatica.com/pc-gaming-ultima-pro-s2.html",
    discount: "-18%",
    shipping: "Envío gratis",
  },
  {
    name: "PC Última Corsair ICUE II | Intel Core i7 12700F / 16GB / 1TB / 480SSD M.2 / RTX 3060 12GB / Windows 10 Pro",
    newPrice: "1.582,40€",
    oldPrice: "1.720,00€",
    seller: "Última Informática",
    image: "./assets/articulo8.jpeg",
    href: "https://ultimainformatica.com/pc-ultima-corsair-icue-ii.html",
    discount: "-8%",
    shipping: "Envío gratis",
  },
  {
    name: "PC Gaming Última Lightning Super White| i7 12700F / RTX 4070 Super / 1TB NVME / Windows 11 Pro",
    newPrice: "1.931,99€",
    oldPrice: "2.099,99€",
    seller: "Última Informática",
    image: "./assets/articulo9.webp",
    href: "https://ultimainformatica.com/pc-gaming-ultima-lightning-super-white-i7-12700f-4070-sup.html",
    discount: "-8%",
    shipping: "Envío gratis",
  },
  {
    name: "PC Gaming Última 4070 Super | Intel Core i5 13400F / RTX 4070 SUPER 12GB / 32GB DDR5 / SSD 1TB M.2 / Windows 11 Pro",
    newPrice: "1.693,59€",
    oldPrice: "1.840,86€",
    seller: "Última Informática",
    image: "./assets/articulo10.webp",
    href: "https://ultimainformatica.com/pc-ultima-gaming-4070-super.html",
    discount: "-8%",
    shipping: "Envío gratis",
  },
];

for (let i = 0; i < products.length; i++) {
  const casillaProducto = document.createElement("article");
  const enlaceProducto = document.createElement("a");
  const cajaProducto = document.createElement("div");
  const cajaDescuento = document.createElement("div");
  const cajaEnvio = document.createElement("div");
  const textoDescuento = document.createElement("p");
  const textoEnvio = document.createElement("p");
  const imagenProducto = document.createElement("img");
  const nombreProducto = document.createElement("p");
  const vendedorProducto = document.createElement("p");
  const precioAntiguo = document.createElement("p");
  const precioNuevo = document.createElement("p");

  textoDescuento.textContent = products[i].discount;
  textoEnvio.textContent = products[i].shipping;
  nombreProducto.textContent = products[i].name;
  precioAntiguo.textContent = products[i].oldPrice;
  precioNuevo.textContent = products[i].newPrice;
  vendedorProducto.textContent = "Vendido por: " + products[i].seller;
  casillaProducto.setAttribute("class", "producto");
  enlaceProducto.setAttribute("href", products[i].href);
  enlaceProducto.setAttribute("rel", "noopener");
  cajaDescuento.setAttribute("class", "discount");
  cajaEnvio.setAttribute("class", "Sent");
  imagenProducto.setAttribute("src", products[i].image);
  imagenProducto.setAttribute("alt", products[i].name);
  nombreProducto.setAttribute("class", "Nproducto");
  vendedorProducto.setAttribute("class", "Nproducto");
  precioAntiguo.setAttribute("class", "oldPrice");
  precioNuevo.setAttribute("class", "newPrice");

  cajaDescuento.appendChild(textoDescuento);
  cajaEnvio.appendChild(textoEnvio);
  cajaProducto.appendChild(cajaDescuento);
  cajaProducto.appendChild(cajaEnvio);
  enlaceProducto.appendChild(cajaProducto);
  enlaceProducto.appendChild(imagenProducto);
  enlaceProducto.appendChild(nombreProducto);
  enlaceProducto.appendChild(precioAntiguo);
  enlaceProducto.appendChild(precioNuevo);
  enlaceProducto.appendChild(vendedorProducto);
  casillaProducto.appendChild(enlaceProducto);
  Descuentos.appendChild(casillaProducto);
}

//Las opiniones de la página.

const opinions = [
  {
    nombre: "Álvaro Cano",
    nombreFoto: "Foto de Álvaro Cano",
    foto: "./assets/Opinion1.png",
    calificacion: 5,
    comentario:
      "Excelente experiencia, tanto por parte del recibimiento en tienda como por parte del técnico. Especial mención a Miguel (Técnico), que me dio una solución rapidísima y muy profesional, llamándome varias veces para asegurar el mejor resultado. Ya tengo técnico de informática de aquí en adelante. Un placer.",
  },
  {
    nombre: "Dennys Hernández",
    nombreFoto: "Foto de Dennys Hernández",
    foto: "./assets/Opinion2.png",
    calificacion: 5,
    comentario:
      "Muy profesionales, no cabe duda que saben de lo que hablan, tienen productos de primera calidad, incluso los más baratos tienen excelente relación calidad precio. Y en general muy buenos precios. Recomiendo estar atentos a su web suelen haber buenas ofertas y descuentos en compras on line.",
  },
  {
    nombre: "Esto es gamer",
    nombreFoto: "Foto de Esto es gamer",
    foto: "./assets/Opinion3.png",
    calificacion: 5,
    comentario:
      "La mejor tienda de informática de toda canarias, los precios son bastante competitivos salvo en pocos artículos (teniendo en cuenta el gran catálogo que ofrece esta muy bien) el trato al cliente es fabuloso, tanto online como en persona, compre con ellos mi nueva torre y me asesoraron en todo de principio a fin, adaptándose a mis exigencias. Es la mejor tienda de Tenerife tanto esta como la de Costa Adeje, recomendado al 100%.",
  },
  {
    nombre: "Robert M R",
    nombreFoto: "Foto de Robert M R",
    foto: "./assets/Opinion4.png",
    calificacion: 3,
    comentario:
      "Una gestión bastante eficiente de los clientes y un trabajo en equipo envidiable. Volvería a comprar aquí sin duda",
  },
];

for (let i = 0; i < opinions.length; i++) {
  const estrellasRating = "⭐";
  const casillaOpinion = document.createElement("article");
  const imagenOpinion = document.createElement("img");
  const ratingOpinion = document.createElement("span");
  const nombreOpinion = document.createElement("h3");
  const textoOpinion = document.createElement("p");
  imagenOpinion.setAttribute("src", opinions[i].foto);
  imagenOpinion.setAttribute("Alt", opinions[i].nombreFoto);
  nombreOpinion.textContent = opinions[i].nombre;
  textoOpinion.textContent = opinions[i].comentario;

  //Aquí creo una función para añadir la puntuación de la opinion dinamicamente en función de la que tenga en el array de objetos.

  const rating = () => {
    let stars = "";
    for (let j = 0; j < opinions[i].calificacion; j++) {
      stars = stars + estrellasRating;
    }
    return stars;
  };
  ratingOpinion.textContent = rating();
  casillaOpinion.appendChild(imagenOpinion);
  casillaOpinion.appendChild(ratingOpinion);
  casillaOpinion.appendChild(nombreOpinion);
  casillaOpinion.appendChild(textoOpinion);
  Opiniones.appendChild(casillaOpinion);
}

//   <!-- Queria hacer el Hero superior al nav pero no consigo que cuando scrolleé desaparezca y solo quede el nav -->
//   <!-- <p id="HeroHead">
//     🖐 Hola, estás viendo los precios para <b>Canarias</b>. Si quieres
//     ver los precios de <b>Península</b>,
//     <a href="https://ultimainformatica.com/iniciar-sesion?create_account=1"
//       >regístrate</a
//     >
//     y
//     <a href="https://ultimainformatica.com/iniciar-sesion?back=addresses"
//       >establece tu dirección</a
//     >
//   </p> -->

//Ubico las diferentes partes de la página donde deberian ir.

documento.insertAdjacentElement("afterbegin", seccionesPagina);
documento.insertAdjacentElement("afterbegin", seccionHero);
const tituloDescuentos = document.querySelector("#title1");
const tituloOpiniones = document.querySelector("#title2");
tituloDescuentos.insertAdjacentElement("afterend", Descuentos);
tituloOpiniones.insertAdjacentElement("afterend", Opiniones);
