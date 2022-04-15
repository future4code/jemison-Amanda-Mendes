// -----EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO ------
//---------------------exercicio 1 ----------------
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) // true
console.log("c. ", resultado)

console.log("d. ", typeof resultado) // boolean

//---------------------exercicio 2 ----------------

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // vai concatenar

//---------------------exercicio 3 ----------------
/*
todo valor recebido no prompt é considerado uma string, 
tem que ser passado para number para somar e não concatenar


let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

//-------EXERCICIO DE ESCRITA DE CÓDIGO------------
//---------------------exercicio 1 ----------------

let idadeUsuario = Number(prompt("Qual a sua idade ?"));
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"));
let diferencaIdade = idadeUsuario - idadeAmigo;
let idadeUsuarioMaior = idadeUsuario > idadeAmigo

console.log("Sua idade é maior que a idade do seu amigo ?", idadeUsuarioMaior);
console.log("A diferença de idade sua para o seu amigo é", diferencaIdade);

//---------------------exercicio 2 ----------------

let numeroPar = Number(prompt("Insira um número par"));
let restoDivisao = numeroPar%2

console.log(restoDivisao);
// O resto é sempre 0, quando colocado um número ímpar, o resto é 1.

//---------------------exercicio 3 ----------------

let idade = Number(prompt('Quantos anos você tem ?'));

console.log('A sua idade em meses é: ', idade*12);
console.log('A sua idade em dias é: ', idade*365);
console.log('A sua idade em horas é: ', idade*8760);

//---------------------exercicio 4 ----------------

const numero1 = Number(prompt('Insira o primeiro número'));
const numero2 = Number(prompt('Insira o segundo número'));

let primeiroMaior = numero1 > numero2;
let primeiroIgual = numero1 == numero2;
let primeiroDivisivel = numero1 % numero2 == 0;
let segundoDivisivel = numero2 % numero1 == 0;

console.log('O primeiro número é maior que o segundo ?', primeiroMaior);
console.log('O primeiro número é igual ao segundo ?', primeiroIgual);
console.log('O primeiro número é divisível pelo segundo ?', primeiroDivisivel);
console.log('O segundo número é divisível pelo primeiro ?', segundoDivisivel);

//----------------------DESAFIO--------------------
//---------------------exercicio 1 ----------------
  

// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
let kelvin = (77 - 32)*(5/9) + 273.15;
console.log(`77ºF => ${kelvin}K`);

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
let fahrenheit = 80*(9/5) + 32;
console.log(`80ºC => ${fahrenheit}ºF`);

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
let celsius = 30;
let fahrenheit2 = celsius*(9/5) + 32;
let kelvin2 = (fahrenheit2 - 32)*(5/9) + 273.15;
console.log(`30ºC => ${fahrenheit2}ºF => ${kelvin2}K`);

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
celsius = Number(prompt('Insira o valor em Celcius que deseja converter'))
// let fahrenheit3 = celsius*(9/5) + 32;
// let kelvin3 = (fahrenheit3 - 32)*(5/9) + 273.15;
console.log(`${celsius}ºC => ${fahrenheit2}ºF => ${kelvin2}K`);

//---------------------exercicio 2 ----------------

// 2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar 
// o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia
//  custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por 
//  uma residência.
const quilowattConsumida = 280;
let valorPagar = quilowattConsumida*0.05;
    
// //     a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 
// quilowatt-hora

console.log('R$', valorPagar);
    
// //     b) Altere o programa para receber mais um valor: a porcentagem de desconto.
//  Calcule e mostre o valor a ser pago pela mesma residência acima considerando 
//  15% de desconto
let porcentagem = 15
console.log('Valor com desconto R$', valorPagar - (porcentagem*valorPagar/100));

//---------------------exercicio 3 ----------------
// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um 
// programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
// `20lb equivalem a X kg`
let libra = 20
console.log('20lb equivalem a ', libra/2.205, 'kg');

// b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa
// que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
// 10.5oz equivalem a X kg
let onca = 10.5
console.log('10.5oz equivalem a ', onca*0.028, 'kg');

// c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa 
// que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
// 100mi equivalem a X m
let milha = 100
console.log('100mi equivalem a ', milha*1609.34, 'm');

// d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa 
// que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
// 50ft equivalem a X m
let pes = 50
console.log('50ft equivalem a ', pes*0.3048, 'm');

// e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa
// que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
// `103.56gal equivalem a X l`
let galao = 103.56
console.log('103.56gal equivalem a ', galao*3.78541, 'l');

// f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa 
// que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
// `450 xic equivalem a X l`
let xicara = 450
console.log('450xic equivalem a ', xicara*0.025, 'l');

// g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que 
// ele peça ao usuário o valor da unidade original antes de converter

libra = Number(prompt('Insira o valor em libras para ser convertido para kg'))
console.log('20lb equivalem a ', libra/2.205, 'kg');