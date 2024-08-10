const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia utilizadas:
// `Letra "e" é convertida para "enter"`
// `Letra "i" é convertida para "imes"`
// `Letra "a" é convertida para "ai"`
// `Letra "o" é convertida para "ober"`
// `Letra "u" é convertida para "ufat"`

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}
 
function encriptar(stringEncriptada){
let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();

for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
}
return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}
 
function desencriptar(stringDesencriptada){
let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
stringDesencriptada = stringDesencriptada.toLowerCase();

for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
}
return stringDesencriptada;
}
function btnCopiar() {
    var copia = document.getElementById("mensagem");
    mensagem.select();
    navigator.clipboard.writeText(mensagem.value).then(() => {
        console.log("texto copiado para area de transferencia");
        }).catch(err => {
            console.error("falha ao copiar texto:", err);
        });
}   