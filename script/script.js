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

btn.onclick = function(){
    nav.classList.toggle("active");
}
//carrusel-sidebar
