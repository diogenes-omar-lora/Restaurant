let btn = document.querySelector("#checkbox");
let nav = document.querySelector(".nav-menu");

btn.onclick = function(){
    nav.classList.toggle("active");
}