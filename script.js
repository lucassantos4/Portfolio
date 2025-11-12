  
  
  
  // ANIMAÇÃO DE SCROLL

const lp = document.querySelector('#landingpage');
const myObserver = new IntersectionObserver((entries) => {
    console.log(entries);
})

myObserver.observe(lp)
// MENU BAR RESPONSIVO E ANIMADO

const menuButton = document.getElementById("menucontainer");
const navLinks = document.getElementById("navlistfloating");
const html = document.querySelector("html");
menuButton.addEventListener("click", function(event) {
    if (navLinks.style.display === "flex" && !navLinks.contains(event.target) && !lightmode.contains(event.target)) {
        navLinks.style.display = "none"; 
        menuButton.style.rotate = "none";
        menuButton.style.transition = "all 0.5s";  
        document.getElementById("linha2").style.backgroundColor = ""
        document.getElementById("linha1").style.rotate = ""
        document.getElementById("linha3").style.rotate = ""
        document.getElementById("linha1").style.position = "relative"
        document.getElementById("linha3").style.position = "relative"

    }else{
        navLinks.style.display = "flex"
        menuButton.style.rotate = "90deg"
        menuButton.style.transition = "all 0.5s"; 
        document.getElementById("linha2").style.backgroundColor= "transparent"
        document.getElementById("linha1").style.rotate = "-45deg"
        document.getElementById("linha3").style.rotate = "45deg"
        document.getElementById("linha1").style.position = "absolute"
        document.getElementById("linha3").style.position = "absolute"

    }
});
html.addEventListener("click", function(event) {
    if (!menuButton.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.style.display = "none";
        menuButton.style.rotate = "none"
        menuButton.style.transition = "all 0.5s"  
        document.getElementById("linha2").style.backgroundColor = "" 
        document.getElementById("linha1").style.rotate = "" 
        document.getElementById("linha3").style.rotate = "" 
        document.getElementById("linha1").style.position = "relative" 
        document.getElementById("linha3").style.position = "relative" 
        
    }
});
window.addEventListener("resize" , function() {
    if(window.innerWidth > 1000){
        navLinks.style.display = "none";
        menuButton.style.rotate = "none"
        document.getElementById("linha2").style.backgroundColor = "" 
        document.getElementById("linha1").style.rotate = "" 
        document.getElementById("linha3").style.rotate = "" 
        document.getElementById("linha1").style.position = "relative" 
        document.getElementById("linha3").style.position = "relative"
    }
});

// MODO CLARO / ESCURO
const lightmode = document.getElementById("light-mode-button");
const main = document.querySelector("main");
const css = document.getElementById("css")
let isLight = false; 

if (localStorage.getItem("theme") === "light") {
    css.setAttribute("href" , "./css/claro.css");
    document.getElementById("light-mode-buttonimg").src = "./assets/solpreto.png";
    isLight = true;
}


lightmode.addEventListener("click", function() {
    if (!isLight) {
        localStorage.setItem("theme", "light"); 
        isLight = true;
        css.setAttribute("href" , "./css/claro.css");
        window.location.reload()
    } else {
        localStorage.setItem("theme", "dark");  
        isLight = false;
        window.location.reload()
        css.setAttribute("href" , "./css/escuro.css");
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

/*
function ativarModoClaro() {
    main.style.backgroundColor = "var(--branco)";
    document.getElementById("menubuttonimg").src = "./assets/menupreto.png";
    document.getElementById("about").style.backgroundColor = "transparent";
    document.getElementById("about").style.border = "none";
    document.getElementById("about").style.boxShadow = "none";
    document.getElementById("descricaobreve").style.backgroundColor = "";
    document.getElementById("descricaobreve").style.boxShadow = "0px 0px 5px var(--preto-degrade)";
    document.getElementById("descricaobreve").style.backdropFilter = "blur(50px)";
    document.getElementById("descricaobreve").style.borderRadius = "0px";
    document.getElementById("formulariodecontato").style.border = "none";
    document.getElementById("formulariodecontato").style.backgroundColor = "transparent";
    document.getElementById("mapscontainer").style.backgroundColor = "transparent";
    document.getElementById("fotopessoal").style.borderRadius = "100%";
    document.querySelectorAll(".socialmediasbutton").forEach((element) => {
        element.style.filter = "invert(1)";
        element.style.boxShadow = "1px 1px 5px var(--branco)";
    });
    document.getElementById("landingpage").style.backgroundImage = "linear-gradient(to bottom, transparent , var(--branco))";
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
    document.getElementById("descricaobreve").style.backgroundColor = "transparent";
    document.getElementById("descricaobreve").style.boxShadow = "none";
    document.getElementById("descricaobreve").style.backdropFilter = "blur(0px)";
    document.getElementById("menubuttonimg").src = "./assets/menubranco.png";
    document.getElementById("about").style.backgroundColor = "var(--branco)";
    document.querySelectorAll(".socialmediasbutton").forEach((element) => {
        element.style.filter = "invert(0)";
        element.style.boxShadow = "1px 1px 8px var(--preto)";
    });
    document.getElementById("landingpage").style.backgroundImage = "linear-gradient(to bottom, var(--preto-degrade)  , var(--preto))";
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
*/
 // animação about
const about = document.getElementById("about")
about.addEventListener("mouseover" , function() {
        //caso modo claro
    if(isLight === true ){
        about.style.backgroundColor = "var(--preto-degrade)"
        document.getElementById("fotopessoal").style.borderRadius = "45%"
        
    }
});
about.addEventListener("mouseleave" , function() {

    if(isLight === true ){
        about.style.background = "var(--branco)"
        document.getElementById("fotopessoal").style.borderRadius = ""
    }
});
about.addEventListener("mouseover" , function() {
        // caso modo escuro
    if(isLight === false ){
        document.querySelectorAll(".circle").forEach(circle => {
            circle.style.backgroundColor = "var(--preto)";
        });
        document.getElementById("fotopessoalcontainer").style.backgroundColor = "var(--verdeescuro)"
        document.getElementById("fotopessoalcontainer").style.boxShadow = "0px 0px 15px #0000003f"
    }
});
about.addEventListener("mouseleave" , function() {

    if(isLight === false ){
        document.querySelectorAll(".circle").forEach(circle => {
            circle.style.backgroundColor = "var(--branco)";
        });
        document.getElementById("fotopessoalcontainer").style.backgroundColor = ""
        document.getElementById("fotopessoalcontainer").style.transition = "all 1s"
    }
});
about.addEventListener("mouseover" , function() {

    about.style.transition = "all 0.6s ease"
    document.getElementById("fotopessoal").style.scale = "1.1"
    document.getElementById("fotopessoal").style.transition = "all 0.5s ease"
});
about.addEventListener("mouseleave" , function() {

    about.style.transition = "all 0.6s ease"
    document.getElementById("fotopessoal").style.borderRadius = ""
    document.getElementById("fotopessoal").style.scale = ""
    document.getElementById("fotopessoal").style.transition = "all 0.5s ease"

});
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
