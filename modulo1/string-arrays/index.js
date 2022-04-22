//-------------EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO---------------
//-------------------------Exercicio 1----------------------------
let array
console.log('a. ', array) //undefined

array = null
console.log('b. ', array) //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //11

let i = 0
console.log('d. ', array[i]) //3

array[i+1] = 19
console.log('e. ', array) //11

const valor = array[i+6]
console.log('f. ', valor) //12

//-------------------------Exercicio 2----------------------------
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//"SUBI NUM ÔNIBUS EM MIRROCOS", (27)

//----------------EXERCICIO DE ESCRITA DE CÓDIGO------------------
//-------------------------Exercicio 1----------------------------
let nomeDoUsuario = prompt('Digite seu nome de usuário');
let emailDoUsuario = prompt('Digite seu e-mail');
console.log('O e-mail ' + emailDoUsuario + ' foi cadastrado com sucesso. Seja bem-vinda(o), '+ nomeDoUsuario + '!');

//-------------------------Exercicio 2----------------------------

let comidasFavoritas = ['Pizza','Lasanha','Hambúrguer','Massa','Ovo'];
console.log ('Essas são minhas comidas favoritas')

console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

let comidaFavoritaUsuario = prompt('Qual sua comida favorita?')

comidasFavoritas[1] = comidaFavoritaUsuario

console.log(comidasFavoritas[0]);
console.log(comidasFavoritas[1]);
console.log(comidasFavoritas[2]);
console.log(comidasFavoritas[3]);
console.log(comidasFavoritas[4]);

//-------------------------Exercicio 3----------------------------
let listaDeTarefas

let tarefa1 = prompt('Digite a primeira tarefa a ser feita no dia');
let tarefa2 = prompt('Digite a segunda tarefa a ser feita no dia');
let tarefa3 = prompt('Digite a terceira tarefa a ser feita no dia');

listaDeTarefas = [tarefa1, tarefa2, tarefa3];

console.log(listaDeTarefas);

let indice = prompt('Digite o indice da tarefa que já realizou.');
listaDeTarefas.splice (indice, 1);

console.log(listaDeTarefas);
