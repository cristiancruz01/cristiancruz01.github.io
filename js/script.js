//Funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}
//Funcion desaparecer menu una vez que se ha seleccionado una opcion en el modo responsive
var x = document.getElementById("nav");
x.className = "";
//funcion menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive"
    } else {
        x.className ="";
    }
}
window.onscroll = function(){
    efectoHabilidades()
};
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight -skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("java").classList.add("barra-progreso2");
        document.getElementById("php").classList.add("barra-progreso3");
        document.getElementById("python").classList.add("barra-progreso4");
        document.getElementById("bd").classList.add("barra-progreso4");
    }
}
