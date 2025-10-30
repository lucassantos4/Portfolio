
    // ANIMAÇÃO DE SCROLL

const lp = document.querySelector('#landingpage');
const myObserver = new IntersectionObserver((entries) => {
    console.log(entries);
})

myObserver.observe(lp)
// MENU BAR RESPONSIVO

const menuButton = document.getElementById("menucontainer");
const navLinks = document.getElementById("navlistfloating");
menuButton.addEventListener("click", function() {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";    
    } else {
        navLinks.style.display = "flex";
    }
});

// MODO CLARO / ESCURO
const lightmode = document.getElementById("light-mode-button");
const main = document.querySelector("main");
let isLight = false; 

if (localStorage.getItem("theme") === "light") {
    ativarModoClaro();
    isLight = true;
}

lightmode.addEventListener("click", function() {
    if (!isLight) {
        ativarModoClaro();
        localStorage.setItem("theme", "light"); 
        isLight = true;
    } else {
        desativarModoClaro();
        localStorage.setItem("theme", "dark");  
        isLight = false;
    }
});
lightmode.addEventListener("mouseenter", function () {
    if (!isLight) {
        document.getElementById("light-mode-buttonimg").src = "./assets/solpreto.png";
        document.getElementById("light-mode-button").style.backgroundColor = "var(--branco)";
    }else{
        document.getElementById("light-mode-buttonimg").src = "./assets/solbranco.png";
        document.getElementById("light-mode-button").style.backgroundColor = "var(--preto)";
    
    }
    document.getElementById("light-mode-buttonimg").style.transition = "filter 0.4s ease";

});
lightmode.addEventListener("mouseleave", function () {
    if (!isLight) {
        document.getElementById("light-mode-buttonimg").src = "./assets/solbranco.png";
    }else{
        document.getElementById("light-mode-buttonimg").src = "./assets/solpreto.png";
    }
    document.getElementById("light-mode-button").style.backgroundColor = "transparent";
    document.getElementById("light-mode-buttonimg").style.transition = "filter 0.4s ease";
});


function ativarModoClaro() {
    main.style.backgroundColor = "var(--branco)";
    document.getElementById("menubuttonimg").src = "./assets/menupreto.png";
    document.getElementById("about").style.backgroundColor = "transparent";
    document.getElementById("about").style.border = "none";
    document.getElementById("about").style.boxShadow = "none";
    document.getElementById("formulariodecontato").style.border = "none";
    document.getElementById("formulariodecontato").style.backgroundColor = "transparent";
    document.getElementById("mapscontainer").style.backgroundColor = "transparent";
    document.getElementById("fotopessoal").style.borderRadius = "100%";
    document.querySelectorAll(".socialmediasbutton").forEach((element) => {
        element.style.filter = "invert(1)";
        element.style.boxShadow = "1px 1px 5px var(--branco)";
        
    });
    document.querySelectorAll(".navlistfloatingitem").forEach((element) => {
        element.style.color = "var(--preto)";
        element.style.backgroundColor = "var(--branco)";
        element.style.transition = "color 0.4s ease";
    });
    document.querySelectorAll("nav").forEach((element) => {
        element.style.filter = "invert(1)";
        element.style.transition = "filter 0.4s ease";
    });
    document.querySelectorAll(".porcentagembar").forEach((element) => {
        element.style.backgroundColor = "var(--preto-degrade)";
    });
    document.getElementById("mapscontainer").style.border = "none";
    document.getElementById("skillsbox").style.backgroundColor = "transparent";
    document.querySelector("footer").style.color = "var(--branco)";
    document.querySelector("footer").style.backgroundColor = "var(--preto)";
    document.getElementById("myprojects").style.color = "var(--preto)";
    document.getElementById("skillsbox").style.color = "var(--preto)";
    document.querySelectorAll(".myskills").forEach((element) => {
        element.style.backgroundColor = "var(--preto-degrade)";
    });
    document.querySelectorAll(".circle").forEach((element) => {
        element.style.backgroundColor = "var(--preto)";
    });
    document.getElementById("header").style.backgroundColor = "var(--branco)";
    document.getElementById("light-mode-buttonimg").src = "./assets/solpreto.png";
    isLight = true;
}

function desativarModoClaro() {
    main.style.backgroundColor = "var(--preto)";
    document.getElementById("menubuttonimg").src = "./assets/menubranco.png";
    document.getElementById("about").style.backgroundColor = "var(--branco)";
    document.querySelectorAll(".socialmediasbutton").forEach((element) => {
        element.style.filter = "invert(0)";
        element.style.boxShadow = "1px 1px 8px var(--preto)";

    });
    document.querySelectorAll(".navlistfloatingitem").forEach((element) => {
        element.style.color = "var(--branco)";
        element.style.backgroundColor = "var(--preto)";
        element.style.transition = "color 0.4s ease";
    });
    document.getElementById("fotopessoal").style.borderRadius = "0%";
    document.querySelectorAll(".porcentagembar").forEach((element) => {
        element.style.backgroundColor = "var(--branco-degrade)";
    });
    document.getElementById("formulariodecontato").style.backgroundColor = "var(--branco)";
    document.getElementById("mapscontainer").style.backgroundColor = "var(--branco)";
    document.querySelector("footer").style.backgroundColor = "var(--preto)";
    document.querySelector("footer").style.color = "var(--branco)";
    document.getElementById("myprojects").style.color = "var(--branco)";
    document.getElementById("header").style.backgroundColor = "var(--preto)";
    document.querySelectorAll(".myskills").forEach((element) => {
        element.removeAttribute("style");
    });
    document.querySelectorAll(".circle").forEach((element) => {
        element.style.backgroundColor = "var(--branco)";
    });
    document.getElementById("skillsbox").style.color = "var(--branco)";
    document.querySelectorAll("nav").forEach((element) => {
        element.style.filter = "invert(0)";
    });
    document.getElementById("light-mode-buttonimg").src = "./assets/solbranco.png";
    isLight = false;
}

    //MOUSE PERSONALIZADO
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle){
    circle.x = 0;
    circle.y = 0;
});
window.document.addEventListener("mousemove", function(e){ 
    coords.x = e.clientX;
    coords.y = e.clientY;

   
});

function animateCircles(){

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle , index) {
        circle.style.left = x -12 + "px";
        circle.style.top = y -12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

    });

    requestAnimationFrame(animateCircles);
}
animateCircles();
 // MASCARA DE CELULAR NO FORMULÁRIO DE CONTATO
var celular = window.document.getElementById("celular")
celular.addEventListener("input", () => {
    var limparvalor = celular.value.replace(/\D/g, "").substring(0,11);

    var numerosArray = limparvalor.split("");

    var numeroFormatado = "";
    
    if(numerosArray.length > 0 ){
        //DDD
        numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
    }
    if(numerosArray.length > 0 ){
        //PRIMEIRO DIGITO
        numeroFormatado += ` ${numerosArray.slice(2,3).join("")}`;
    }
    if(numerosArray.length > 2){
        //QUATRO DIGITOS SEGUINTES
        numeroFormatado += ` ${numerosArray.slice(3,7).join("")}`;
    }
    if(numerosArray.length > 7){
        //ULTIMOS QUATRO DIGITOS
        numeroFormatado += `-${numerosArray.slice(7,11).join("")}`;
    }

    celular.value = numeroFormatado;
})
