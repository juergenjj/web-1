let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector(".list-group");
let containerMenu = document.querySelector(".menu");

let activador = true;


//menu de navegacion lateral activacion

btnMenu.addEventListener("click", () => {

  document.querySelector(".btn-menu i").classList.toggle("fa-times");

  if (activador) {
    menu.style.left = "0";
    menu.style.transitionDuration = "0.8s";


    activador = false;
  } else {
    menu.style.left = "-25%";
    menu.style.transitionDuration = "0.5s";
    activador = true;
  }
});

//botones de menu  queden Seleccionado - intercalar clases activas de menu
let enlaces = document.querySelectorAll(".lista-menu li a");

enlaces.forEach((element) => {
  element.addEventListener("click", (event) => {


    enlaces.forEach((link) => {
      link.classList.remove("activo");
    });

    event.target.classList.add("activo");
  });
});

// barra de menu ... hace scrol y se muestra hacia arriba ...

let prevScrollpos = Window.pageYOffset;
//variable boton arriba
let goTop = document.querySelector(".arriba");

window.onscroll = () => {
  // variable que cambia su valor al hacer scroll currentScroll

  let currentScroll = window.pageYOffset;

  ///if  para que el scroll se muestre de subida
  if (prevScrollpos > currentScroll) {
    containerMenu.style.top = "0";

    containerMenu.style.transitionDuration = "0.5s";
  } else {
    containerMenu.style.top = "-60px";

    containerMenu.style.transitionDuration = "0.5s";
  }

  prevScrollpos = currentScroll;

  //mostrar y ocultar scroll stilos

  let arriba = window.pageYOffset;

  if (arriba <= 600) {
    containerMenu.style.borderBottom = "none";
    goTop.style.right = "-100%";
  } else {
    containerMenu.style.borderBottom = "2px solid #ff2e63";
    goTop.style.right = "0";
    goTop.transitionDuration = 0.5;
  }
};

goTop.addEventListener("click", () => {
  document.body.scrollTop = "0";
  document.documentElement.scrollTop = "0";
});

let verAbajo = document.querySelector("#abajo");
verAbajo.addEventListener("click", () => {
  document.body.scrollTop = "800";
  document.documentElement.scrollTop = "800";
});














