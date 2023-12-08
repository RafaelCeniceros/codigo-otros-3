/* Se comprobara que el js este conectado al html */
console.log("Estoy conectado al html");
// Tenemos un li de productos

const products = [  /* Se cambio el nombre de la variable a ingles */
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

const productsContainerHTML = document.getElementById("lista-de-productos"); /* Se modificó el nombre de la variable y se corrigio el .getElementByName por .getElementByID para que correspondiera*/
const textFilterHTML = document.getElementById("filter-input"); /* Se modificó el nombre de la variable y se corrigio a un .getElementByID para que correspondiera con el ID*/

const displayProductsDOM = (productsArray) => {
  // Iterar sobre cada elemento en el arreglo "productos"
  for (let i = 0; i < productsArray.length; i++) {
    /* 
    Hacian Falta ; en la mayoria de sentencias.
    Se modifico el nombre de las variables por variables más descriptivas
    */
    // Crear un nuevo elemento <div> para representar el producto
    var productCardHTML = document.createElement("div");
    productCardHTML.classList.add("producto"); // Agregar la clase "producto" al div

    // Crear un elemento <p> para el título del producto
    var titleProduct = document.createElement("p");
    titleProduct.classList.add("titulo"); // Agregar la clase "titulo" al párrafo
    titleProduct.textContent = productsArray[i].nombre; // Establecer el nombre del producto

    // Crear un elemento <img> para la imagen del producto
    var imagenProduct = document.createElement("img");
    imagenProduct.setAttribute('src', productsArray[i].img); // Establecer la URL de la imagen del producto

    // Agregar el título y la imagen como hijos del div que representa el producto
    productCardHTML.appendChild(titleProduct);
    productCardHTML.appendChild(imagenProduct);

    // Agregar el div que representa el producto al contenedor de productos en el DOM
    productsContainerHTML.appendChild(productCardHTML);
  }
}

displayProductsDOM (products); //Se llamaba a una funcion que no existia. Por el contexto del nombre, el for anterior cumple esa funcion asi que se usara esa funcion para que el for cumpla con su funcion. 

// Seleccionar el botón en el DOM
const buttonFilterHTML = document.querySelector("button");

// Asignar un evento de clic al botón
buttonFilterHTML.onclick = function() {
  // Eliminar todos los hijos del contenedor de productos
  while (productsContainerHTML.firstChild) {
    productsContainerHTML.removeChild(productsContainerHTML.firstChild);
  }

  // Obtener el valor del filtro de texto
  const filterTextValue = textFilterHTML.value;
  console.log(filterTextValue);

  // Filtrar los productos según el texto ingresado
  const filteredProducts = filtrate(products, filterTextValue);

  // Mostrar los productos filtrados en el DOM
  displayProductsDOM(filteredProducts);
}

// Función de filtrado que devuelve productos que coinciden con el texto proporcionado
const filtrate = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}