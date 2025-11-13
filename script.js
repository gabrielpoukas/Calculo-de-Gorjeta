window.onload = function() {


const valorContaInput = document.querySelector ('#valor-conta');
const gorjetaPctInput = document.querySelector ('#porcentagem-gorjeta');
const pessoasInput = document.querySelector ('#num-pessoas');


const gorjetaPessoasSpan = document.querySelector ('#gorjeta-pessoa');
const totalPessoasSpan = document.querySelector ('#total-pessoa');

const btnCalcular = document.querySelector ('#btn-calcular');

btnCalcular.addEventListener ('click' , calcularGorjeta);

function calcularGorjeta() {

 const ValorConta = parseFloat(valorContaInput.value);
 const porcentagemGorjeta = parseFloat(gorjetaPctInput.value);
 const numPessoas = parseFloat(pessoasInput.value);

if (isNaN(ValorConta) || ValorConta <= 0 || isNaN(numPessoas) || numPessoas <= 0  || isNaN(porcentagemGorjeta) ) {

    alert (' Insira valores Válidos.');
    return;

}

const valorGorjetaTotal = ValorConta * (porcentagemGorjeta / 100);
const totalComGorjeta = ValorConta + valorGorjetaTotal;

const gorjetaPorPessoa = valorGorjetaTotal / numPessoas;
const totalPorPessoa = totalComGorjeta / numPessoas;

gorjetaPessoasSpan.textContent= `R$ ${gorjetaPorPessoa.toFixed(2)}`;
totalPessoasSpan.textContent=  `R$ ${totalPorPessoa.toFixed(2)}`;


}

};