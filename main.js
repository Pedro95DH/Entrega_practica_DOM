const seccionBanner = document.createElement("section");
const seccionesPagina = document.createElement("section");
const Descuentos = document.createElement("section");
const Opiniones = document.createElement("section");

if (window.innerWidth >= 768) {
  seccionBanner.setAttribute("id", "hero-desktop");
  seccionesPagina.setAttribute("id", "secciones-desktop");
} else {
  seccionBanner.setAttribute("id", "hero-mobile");
  seccionesPagina.setAttribute("id", "secciones-mobile");
}

seccionesPagina.setAttribute("class", "secciones");
Descuentos.setAttribute("id", "descuentos");
Opiniones.setAttribute("id", "Opiniones");

const documento = document.querySelector("main");

window.addEventListener(
  "resize",
  (Redimension = () => {
    if (window.innerWidth >= 768) {
      seccionBanner.setAttribute("id", "hero-desktop");
      seccionesPagina.setAttribute("id", "secciones-desktop");
    } else {
      seccionBanner.setAttribute("id", "hero-mobile");
      seccionesPagina.setAttribute("id", "secciones-mobile");
    }
  })
);

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
  const casilla = document.createElement("article");
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
  vendedorProducto.textContent = "Vendido por:" + products[i].seller;
  casilla.setAttribute("class", "producto");
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
  casilla.appendChild(enlaceProducto);
  Descuentos.appendChild(casilla);
}

const opinions = [];

//   <!-- Queria hacer el banner superior al nac pero no consigo que cuando scrolleé desaparezca y solo quede el nav -->
//   <!-- <p id="bannerHead">
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

documento.appendChild(seccionBanner);
documento.appendChild(seccionesPagina);
documento.appendChild(Descuentos);
documento.appendChild(Opiniones);
