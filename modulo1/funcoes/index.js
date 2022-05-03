//----------------------------------EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO----------------------------------
//------------------------------------------exercicio 01--------------------------------------------------
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) //10
console.log(minhaFuncao(10)) //50

/*
a) O que vai ser impresso no console?
R- 10, 50
b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e 
`minhaFuncao(10)`? O que apareceria no console?
R- O programa executaria a função que foi chamada, não apareceria nada no console.
*/

//------------------------------------------exercicio 02--------------------------------------------------
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

/*
a. Explique o que essa função faz e qual é sua utilidade
R- Transforma todas as letras do texto inserido em letras minúsculas e retorna "true" or "false" caso tenha ou não "cenoura" escrito na frase.
b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura` R- "eu gosto de cenoura. True"
     ii.  `CENOURA é bom pra vista` "cenoura é bom pra vista. True"
     iii. `Cenouras crescem na terra` "cenouras crescem na terra. False"
*/

//-------------------------------------EXERCICIOS DE ESCRITA DE CÓDIGO------------------------------------
//------------------------------------------exercicio 01--------------------------------------------------
function sobreMim () {
    console.log("Eu sou Amanda, tenho 27 anos, moro no Rio de Janeiro e sou estudante.");
}

function infoUsuario (nome, idade, cidade, profissao) {
nome = prompt('Digite seu nome');
idade = prompt('Digite sua idade');
cidade = prompt('Digite sua cidade');
profissao = prompt('Digite sua profissão');

const usuario = ('Eu sou ' + nome + ', tenho ' + idade + ' anos, moro em ' + cidade + ' e sou ' + profissao +".")
console.log(usuario);
}
infoUsuario()

//------------------------------------------exercicio 02--------------------------------------------------
    
//     a) Escreva uma função que receba 2 números como parâmetros, e, 
//     dentro da função, faça a soma das duas entradas e retorne o 
//     resultado. Invoque a função e imprima no console o resultado.
    
function somaNumeros (primeiroNumero, segundoNumero) {
    primeiroNumero =  Number(prompt('Digite o primeiro número'));
    segundoNumero = Number(prompt('Digite o segundo número'));
const somaNumero = primeiroNumero + segundoNumero
return somaNumero
}
console.log(somaNumeros());

//     b) Faça uma função que recebe 2 números e retorne um booleano 
//     que informa se o primeiro número é **maior ou igual** ao segundo.
function numeros (primeiroNumero, segundoNumero) {
    primeiroNumero =  Number(prompt('Digite o primeiro número'));
    segundoNumero = Number(prompt('Digite o segundo número'));
    const numerosIguais = (primeiroNumero>=segundoNumero)
    return numerosIguais
}
console.log(numeros());

//     c) Escreva uma função que receba um número e devolva um booleano 
//     indicando se ele é par ou não

function parOuImpar(numero) {
    numero = prompt('Digite um número')
    par = numero%2 == 0
    return par
}

console.log(parOuImpar());
console.log("Se o resultado for 'true' ele é par, se for 'false' é ímpar");

    
//     d) Faça uma função que recebe uma mensagem (`string`) como 
//     parâmetro e imprima o tamanho dessa mensagem, juntamente com 
//     uma versão dela em letras maiúsculas.

 let banana = prompt('mensagem')

function textoMaiusculo (textoUsuario) {
textoUsuario = banana.toUpperCase().length

return textoUsuario

}

console.log(textoMaiusculo());

//------------------------------------------exercicio 03--------------------------------------------------

// Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
// inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

primeiroNumero = Number(prompt('Insira o primeiro número'));
segundoNumero = Number(prompt('Insira o segundo número'));

function funcaoSoma (soma) {
soma = primeiroNumero+segundoNumero
return soma

}

function funcaoSubtracao (subtração) {
subtração = primeiroNumero-segundoNumero
    return subtração
    
}

function funcaoMultiplicacao (multiplicação) {
multiplicação = primeiroNumero*segundoNumero
    return multiplicação
    
}

function funcaoDivisao (divisao) {
divisao = primeiroNumero/segundoNumero
    return divisao
    
}

console.log(funcaoSoma());
console.log(funcaoSubtracao());
console.log(funcaoMultiplicacao());
console.log(funcaoDivisao());