const inputText = document.querySelector(".input-texto");
const mensaje   = document.querySelector(".mensaje");

function btnEncriptar(){
    alert(inputText.value);
    debugger;
    document.getElementById('rightContent2').hidden = false;
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"], ["u","ufat"]];

    var valor = inputText.value.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(valor.includes(matrizCodigo[i][0])){
            valor = valor.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    mensaje.value = valor;
}

function btnDesEncriptar(){
    alert(inputText.value);


    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"], ["ufat","u"]];

    var valor = inputText.value.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(valor.includes(matrizCodigo[i][0])){
            valor = valor.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    mensaje.value = valor;
}


function copyToClickBoard(){
    
    var content = document.getElementById('resultText').value;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Texto copiado..."+content);
        alert("Texto Copiado...");

    })
        .catch(err => {
        console.log('Ocurrio un error', err);
    })
 
}