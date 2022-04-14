// exercício 1

let a = 10
let b = 10

console.log(b)

// console.log(10)

b = 5
console.log(a, b)

// console.log(10, 5)

//exercício 2

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

// console.log(10, 10, 10)

// exercicio 3

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

// let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?")
//let salarioDia = prompt(Quanto você recebe por dia?)
// alert("Você recebe ${horasTrabalhadasDia/salarioDia} por hora")


// exercicio de escrita de código
// exercicio 1


let firstname
let age
typeof(firstname, age)

// tipo indefinido, não foi atribuido nenhum valor

let nome = prompt ("Qual o seu nome ?")
let idade = prompt ("Qual sua idade ?")

alert ("Olá " + nome + ", você tem " + idade + " anos.");

console.log(nome, idade)
typeof (nome, idade)


// as duas variáveis são consideradas strings.

// exercicio 2

let roupaAzul = true
let alturaMax = false
let banana = true

console.log("Você está usando roupa azul ? - " + roupaAzul);
console.log("Você tem mais de 1.83 de altura ? - " + alturaMax);
console.log("Você gosta de banana ? - " + banana);

// exercicio 3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10