let nombre = String(prompt("Cual es tu nombre?").toLowerCase());

console.log(`Hola ${nombre}! Bienvenido a Fratelli!`);

// La idea de mi proyecto es hacer un cotizador (para aproximar el precio) de una pagina web. 

let preguntaTipoPagina = parseInt(Number(prompt("Si queres una landing page ingresa 1, sino ingresa 2.")));
let preguntaViewportsLanding = parseInt(Number(prompt("Cuantos viewports queres que tenga tu Landing page")));

let tipoDePagina = preguntaTipoPagina => {
if (preguntaTipoPagina == 1) {
    paginaLandingPage(preguntaViewportsLanding);
} else if (preguntaTipoPagina == 2) {
    paginaNotLandingPage();
} else {
    alert ("El dato ingresado no es valido");
}};

let paginaLandingPage = (preguntaViewportsLanding) => {
let resultado;
if (preguntaViewportsLanding <= 3) {
    resultado = "La pagina vale $10,000";
} else if (3 < preguntaViewportsLanding <= 5) {
    resultado = "La pagina vale $20,000";
} else {resultado = "El precio no puede ser estimado facilmente, envianos un mensaje en Contacto con tu idea!"}
console.log(resultado);
};

let paginaNotLandingPage = (preguntaViewportsLanding) => {
let mensaje = "No trabajamos este tipo de paginas web";
console.log(mensaje);
}

console.log(tipoDePagina(preguntaTipoPagina));