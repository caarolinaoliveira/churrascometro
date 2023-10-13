/*
Carne - 400 gr por pessoa if + de 6 horas - 650 
Cerveja - 1200 ml por pessoa if + 6 horas - 2000
Refrigerante/agua - 1000 ml por pessoa if +6 horas 1500

crianças valem por 0.5 


console.log(inputAdultos.value, inputDuracao.value, inputCriancas.value);
*/ 

const inputAdultos = document.getElementById('adultos');

const inputCriancas = document.getElementById('criancas');

const inputDuracao = document.getElementById('duracao'); 

const resultado = document.getElementById('resultado');

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    qtdTotalCarne= carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
   

    qtdTotalCerveja = cervejaPP(duracao) * adultos;

    qtdTotalRefrigerante= refrigerantePP(duracao) * adultos + ( refrigerantePP(duracao)/2 * criancas);

    console.log(qtdTotalCarne);
    console.log(qtdTotalCerveja);
    console.log(qtdTotalRefrigerante);

    resultado.innerHTML = `<p> ${qtdTotalCarne/1000} Kg de carne </p>`
    resultado.innerHTML += `<p> ${qtdTotalCerveja/1000} L de Cerveja </p>`
    resultado.innerHTML += `<p> ${qtdTotalRefrigerante/1000} L de Bebidas (Água e Refrigerante)</p>`

}

function carnePP(duracao){
    if (duracao>= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao>= 6) {
        return 1500;
    } else {
        return 1200;
    }
}
function refrigerantePP(duracao){
    if (duracao>= 6) {
        return 1200;
    } else {
        return 1000;
    }
}