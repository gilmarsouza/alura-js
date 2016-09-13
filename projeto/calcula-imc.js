var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var paciente = { peso: tdPeso.textContent, altura: tdAltura.textContent };

if (paciente.altura != 0) {
    var imc = paciente.peso / (paciente.altura * paciente.altura);
    
    var tdImc = document.getElementById("imc-2");
    tdImc.textContent = imc;
    
    console.log(imc);
} else {
    console.log("Não posso executar uma divisão por 0!");
}