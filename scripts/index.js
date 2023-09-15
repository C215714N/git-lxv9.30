/* Declaraciones */
const 
    d = document,
    // Navegacion
    navButton = d.querySelector("nav .icon-toggle"),
    navMenu = d.querySelector("nav .navbar")
;
const clickAndres = document.querySelector(".click");

/* Funciones */


/* Eventos */

clickAndres.addEventListener("click", () => {
    alert("HOLA A TODOS");
    alert("VAMOS A PROGRAMAR CON CRISTIAN");
});

navButton.onclick = function(){
    navMenu.classList.toggle("active");
}