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
