const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    });

    if (navMenu.classList.contains("nav-menu_visible")) {

        navToggle.setAttribute("arial-label", "Cerrar Menu");

    } else {
    navToggle.setAttribute("aria-label","Abrir Menu");
};

let funcionremove = function(){
    navMenu.classList.remove("nav-menu_visible");
};

const aLink1 = document.querySelector(".link1");
const aLink2 = document.querySelector(".link2");
const aLink3 = document.querySelector(".link3");
const aLink4 = document.querySelector(".link4");

aLink1.addEventListener("click", () =>{
    funcionremove();
});

aLink2.addEventListener("click", () =>{
    funcionremove();
});

aLink3.addEventListener("click", () =>{
    funcionremove();
});
aLink4.addEventListener("click", () =>{
    funcionremove();
});



// APENAS BAJA EL SCROLL PONE BACKGROUND AL MENU

window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("abajo", window.scrollY > 0);

    var logo = document.querySelector(".logo");
    logo.classList.toggle("nav-link-abajo", window.scrollY > 0);
});



//CODIGO PARA SCROLL SMOOTH CON MOVIMIENTO

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});

// BOTON IR ARRIBA 

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    var currentScroll = document.documentElement.scrollTop; 

    if(currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 20));
        buttonUpp.style.transform = "scale(0)";
    }
};

// SCROLL DE BOTON IR ARRIBA 
buttonUpp = document.getElementById("button-up");

window.onscroll = function (){
    var scroll = document.documentElement.scrollTop;

    if (scroll > 100) {

        buttonUpp.style.transform = "scale(1)";

    } else if(scroll < 100){
        
        buttonUpp.style.transform = "scale(0)";
    }
};