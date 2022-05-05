// //-------------------------------------------Exercícios de interpretação de código---------------------------------
// //------------------------------------------------------Exercício 01-----------------------------------------------

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// //O que o código abaixo está fazendo? Qual o resultado impresso no console?
// //Resposta: O código está recebendo o valor de i e executando até chegar a 4. 0, 1, 2, 3, 4.

// //------------------------------------------------------Exercício 02-----------------------------------------------

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?
// Resposta: 19, 21, 23, 25, 27, ,30

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
// Se sim, o que poderia ser usado para fazer isso?
// Resposta: Sim. Retirar o "if".

// //------------------------------------------------------Exercício 03-----------------------------------------------


// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// Resposta: *, **, ***, ****

//---------------------------------------------Exercícios de escrita de código-------------------------------------
//------------------------------------------------------Exercício 01-----------------------------------------------
// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.     
//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"    
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, 
//     e guarde esses nomes em um array
//     c) Por fim, imprima o array com os nomes dos bichinhos no console

function contarBichinhos () {

let quantidadeDeBichinhos = +prompt('Quantos bichinhos de estimação você tem ?');
let listaDeBichinhos = []
let contador = 1

    if (quantidadeDeBichinhos === 0) {
        console.log('Que pena ! Você pode adotar um pet !');
    }
    while (listaDeBichinhos.length < quantidadeDeBichinhos) {        
        let nomeDoBichinho = prompt('Digite o nome do Bichinho ' + contador);
        listaDeBichinhos.push(nomeDoBichinho);
        contador++;
     }  
     return listaDeBichinhos
}

console.log(contarBichinhos());

// //------------------------------------------------------Exercício 02-----------------------------------------------
// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. 
// Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
    
//     a) Escreva um programa que **imprime** cada um dos valores do array original.

console.log(arrayOriginal);
    
//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

function divideValor (lista) {
    for (let i = 0; i < lista.length; i++) {
   console.log(lista[i]/10);
 }
}
divideValor(arrayOriginal)

//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** 
//     esse novo array


//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". 
//     Depois, **imprima** este novo array.

function imprimeMensagem (lista) { 
  
for (let i = 0; i < lista.length; i++) {
    console.log("O elemento do índex " + i + " é: " + lista[i]);
}
}
imprimeMensagem(arrayOriginal)


//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

function DescobreMaiorEMenor(array){
    let numero = 0
    
    for(let elemento of array) {
       if (elemento > numero){
        numero = elemento
       }
    }
console.log(numero);

 for(let elemento of array) {
    if (elemento < numero){
        numero = elemento
    }
 }
 console.log(numero);
}

DescobreMaiorEMenor(arrayOriginal)
