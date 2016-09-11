var peso = 140;
var altura = 0;

if(altura != 0){
    var imc = peso / (altura * altura);
    console.log(imc);
} else {
    console.log("Não posso executar uma divisão por 0!");
}

console.log(peso);
console.log(altura);