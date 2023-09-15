/* Declaraciones */
const 
    d = document,
    // Navegacion
    navButton = d.querySelector("nav .icon-toggle"),
    navMenu = d.querySelector("nav .navbar")
;
const clickAndres = document.querySelector(".click");

/* Funciones */
function toggle(target, btn, className, [a,b]){
    target.classList.toggle(className) ?
    btn.classList.replace(a,b) :
    btn.classList.replace(b,a);
}

/* Eventos */

clickAndres.addEventListener("click", () => {
    alert("HOLA A TODOS");
    alert("VAMOS A PROGRAMAR CON CRISTIAN");
});

navButton.onclick = function(e){
    toggle(navMenu, e.target, "active", ['icon-toggle','icon-close'])
}