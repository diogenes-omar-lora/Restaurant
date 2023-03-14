//title
let docTitle = document.title;
window.addEventListener( "blur",()=>{
    document.title = "Come Back ;(";
});

window.addEventListener("focus", ()=>{
    document.title = docTitle;
});
//menubottom
let btn = document.querySelector("#checkbox");
let nav = document.querySelector(".nav-menu");
let header = document.querySelector("header");

btn.onclick = function(){
    nav.classList.toggle("active");
    header.classList.toggle("active");
}
//carrusel-sidebar
const carrusel = document.querySelector('.carrusel-items');
let intervalo = null;
let step = 1;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;

const start =()=>{
    intervalo = setInterval(function(){
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if(carrusel.scrollLeft == maxScrollLeft){
            step = step * -1;
        }else if( carrusel.scrollLeft == 0){
            step = step * -1;
        }

    },15)
};

const stop =()=>{
    clearInterval(intervalo)
};
carrusel.addEventListener('mouseover', ()=>{
    stop();
});
carrusel.addEventListener('mouseout', ()=>{
    start();
});
start();