// //-------------------------------------Exercícios de interpretação de código-----------------------------
// //-------------------------------------exercicio 01------------------------------------------------------

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

   
// a) Explique o que o código faz. Qual o teste que ele realiza? Se o número é par ou ímpar
// b) Para que tipos de números ele imprime no console "Passou no teste"? Para os números pares
// c) Para que tipos de números a mensagem é "Não passou no teste"? Para os números ímpares

// //-------------------------------------exercicio 02------------------------------------------------------
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem 
// impressa no console se retirássemos o `break` que está logo acima do `default` 
// (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?


// //-------------------------------------exercicio 03------------------------------------------------------
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.


// //-------------------------------------Exercícios de escrita de código-----------------------------------
// //-------------------------------------exercicio 01------------------------------------------------------
// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console 
// `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// let idade = +prompt('Digite a sua idade');

//function idadeParaDirigir (idade){
// if (idade >= 18) {
//     return "Você pode dirigir";
// } else {
//     return "Você não pode dirigir";
// }
//}

// console.log(idadeParaDirigir(idade))

// //-------------------------------------exercicio 02------------------------------------------------------
// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar 
// M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", 
// "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// let turno = prompt("Digite a letra referente ao turno que você estuda: M(Matutino), V(Vespertino), N(Noturno.)");

// function verificarTurno (turno){
// if (turno ==="M") {
//     return "Bom dia!"
// } else if (turno==="V") {
//     return "Boa tarde!"
// } else if (turno==="N") {
//     return "Boa noite!"
// }
// }

// console.log(verificarTurno(turno));

// //-------------------------------------exercicio 03------------------------------------------------------
//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// let turno = prompt("Digite a letra referente ao turno que você estuda: M(Matutino), V(Vespertino), N(Noturno.)");


// switch (turno) {
//     case "M":
//     console.log("Bom dia!");
//     break

//     case "V":
//     console.log("Boa tarde!");
//     break
    
//     case "N":
//     console.log("Boa noite!");
//     break
//     default:
//         console.log("Digite a letra referente ao turno, tente novamente !");

// }

// //-------------------------------------exercicio 04------------------------------------------------------
// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela 
// só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso 
// está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero 
// de filme que vão assistir e outra pergunta sobre o preço do ingresso, então 
// verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, 
// imprima no console a mensagem: "Bom filme!", caso contrário, imprima 
// "Escolha outro filme :("

// let generoFilme = prompt('Digite o gênero do filme que vão assistir !');
// let valorIngresso = prompt('Digite o valor do ingresso.');

// function escolhaFilme (generoFilme, valorIngresso) {
//     if (generoFilme==="Fantasia" && valorIngresso < 15) {
//         return "Bom filme !"
//     } else {
//         return "Escolha outra filme :("
//     }
// }

// console.log(escolhaFilme(generoFilme, valorIngresso));


//-----------------------------------------------------DESAFIO------------------------------------------

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem 
// `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, 
// chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite 
// o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.


// let generoFilme = prompt('Digite o gênero do filme que vão assistir !');
// let valorIngresso = prompt('Digite o valor do ingresso.');

// function escolhaFilme (generoFilme, valorIngresso) {
//     if (generoFilme==="Fantasia" && valorIngresso < 15) {
//         let lanchinho = prompt('Qual lanchinho você vai comprar ?')
//         return `Bom filme ! e aproveite o seu ${lanchinho}`
//     } else {
//         return "Escolha outra filme :("
//     }
// }

// console.log(escolhaFilme(generoFilme, valorIngresso));

// 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, 
// o usuário deve fornecer algumas informações:
//     - Nome completo;
//     - Tipo de jogo: IN indica internacional; e DO indica doméstico;
//     - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//     - Categoria: pode ser as opções 1, 2, 3 ou 4;
//     - Quantidade de ingressos
    
//     O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir 
//     tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor 
//         unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso 
//         e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, 
//         mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
// ---Dados da compra--- 
// Nome do cliente:  Soter Padua 
// Tipo do jogo:  Nacional 
// Etapa do jogo:  Final 
// Categoria:  1 
// Quantidade de Ingressos:  10 ingressos 
// ---Valores--- 
// Valor do ingresso:  R$ 1980
// Valor total:  R$ 19800

function valoresSF (category) {
    switch (category) {
    case '1':
        return 1320;
  case '2':
        return 880;
  case '3':
        return 550;
  case '4':
        return 220;
 }
}
function valoresDT (category) {
    switch (category) {
    case '1':
        return 660;
  case '2':
        return 440;
  case '3':
        return 330;
  case '4':
        return 170;
 }
}

function valoresFI (category) {
    switch (category) {
    case '1':
        return 1980;
  case '2':
        return 1320;
  case '3':
        return 880;
  case '4':
        return 330;
 }
}
function calcularIngresso() {
    let nome = prompt('Digite seu nome para a compra do ingresso.');
    let tipoDeJogo = prompt('Digite o tipo de jogo: "IN" para Internacional ou "DO" para Doméstico');
    let etapaDoJogo = prompt('Digite a etapa do jogo: "SF" para Semi Final, "DT" para decisão de terceiro lugar ou "FI" para a final.');
    let categoria = prompt('Digite 1, 2, 3 ou 4');
    let quantidadeDeIngresso = +prompt('Qual a quantidade de ingressos ?');
    let valorCategoria = 0;
    switch (etapaDoJogo) {
        case 'SF':
            valorCategoria = valoresSF(categoria);
        break;
      case 'DT':
            valorCategoria = valoresDT(categoria);
        break;
      case 'FI':
            valorCategoria = valoresFI(categoria);
        break;
    }
        let valorTotal = valorCategoria * quantidadeDeIngresso;
    
        if (tipoDeJogo === "IN") {
            valorTotal = valorTotal * 4.1;
        }
        return valorTotal;
    }

    console.log(calcularIngresso())