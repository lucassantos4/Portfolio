
 // PARTICULAS DE FUNDO
particlesJS.load('particles-container', 'particlesjs-config.json');

    // ANIMAÇÃO DE SCROLL

const lp = document.querySelector('#landingpage');
const myObserver = new IntersectionObserver((entries) => {
    console.log(entries);
})

myObserver.observe(lp)

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
        document.getElementById("light-mode-buttonimg").style.filter = "invert(1)";
        document.getElementById("light-mode-button").style.backgroundColor = "#fff";
    }else{
        document.getElementById("light-mode-buttonimg").style.filter = "invert(0)";
        document.getElementById("light-mode-button").style.backgroundColor = "#000";
    
    }
    document.getElementById("light-mode-buttonimg").style.transition = "filter 0.4s ease";

});
lightmode.addEventListener("mouseleave", function () {
    if (!isLight) {
        document.getElementById("light-mode-buttonimg").style.filter = "invert(0)";
    }else{
        document.getElementById("light-mode-buttonimg").style.filter = "invert(1)";
    }
    document.getElementById("light-mode-button").style.backgroundColor = "transparent";
    document.getElementById("light-mode-buttonimg").style.transition = "filter 0.4s ease";
});


function ativarModoClaro() {
    main.style.backgroundColor = "var(--branco)";
    document.getElementById("about").style.backgroundColor = "var(--preto)";
    document.getElementById("quemsou").style.color = "var(--branco)";
    document.getElementById("formulariodecontato").style.border = "none";
    document.getElementById("formulariodecontato").style.backgroundColor = "transparent";
    document.getElementById("mapscontainer").style.backgroundColor = "transparent";
    document.querySelectorAll("button").forEach((element) => {
        element.style.filter = "invert(1)";
    });
    document.querySelectorAll("header").forEach((element) => {
        element.style.filter = "invert(1)";
        element.style.transition = "filter 0.4s ease";
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
    document.getElementById("light-mode-buttonimg").style.filter = "invert(1)";
    isLight = true;
}

function desativarModoClaro() {
    main.removeAttribute("style");
    document.getElementById("about").removeAttribute("style");
    document.getElementById("quemsou").removeAttribute("style");
    document.getElementById("formulariodecontato").removeAttribute("style");
    document.getElementById("mapscontainer").removeAttribute("style");
    document.getElementById("skillsbox").removeAttribute("style");
    document.querySelector("footer").removeAttribute("style");
    document.getElementById("contactbuttonabout").removeAttribute("style");
    document.getElementById("myprojects").removeAttribute("style");
    document.querySelectorAll(".myskills").forEach((element) => {
        element.removeAttribute("style");
    });
    document.querySelectorAll("button").forEach((element) => {
        element.style.filter = "invert(0)";
    });
    document.querySelectorAll("header").forEach((element) => {
        element.style.filter = "invert(0)";
    });
    document.getElementById("light-mode-buttonimg").style.filter = "invert(0)";
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
    circles.forEach(function (circle , index) {
        circle.style.left = coords.x -5000 + "px";
        circle.style.top = coords.y -12 + "px";
    });

});

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
