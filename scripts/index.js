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
    
    for (let i = 1; i < 5; i++) {
        while (i <= 5) {
            alert(i);
            i++
        }
        if (5 === 5) {
            window.location.href = "https://i.blogs.es/0ec27f/memess/1024_2000.webp";
        }
    }
});

navButton.onclick = function(e){
    toggle(navMenu, e.target, "active", ['icon-toggle','icon-close'])
}
