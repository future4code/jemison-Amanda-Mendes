//------------------------------EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO------------------------------------------
//------------------------------------------Exercicio 01------------------------------------------------------
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //Virginia Cavendish
console.log(filme.transmissoesHoje[2]) //canal: "Globo", horário: "14h"

//------------------------------------------Exercicio 02------------------------------------------------------
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
a) O que vai ser impresso no console?
//nome: "Juca", idade: 3, reca: "SRD"
//nome: "Juba", idade: 3, reca: "SRD"
//nome: "Jubo", idade: 3, reca: "SRD"
b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//permite string ou um array seja expandido.

//------------------------------------------Exercicio 03------------------------------------------------------
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console?
//false.. undefined
b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//undefined, pq não declarado nenhum valor para altura.

//----------------------------------EXERCICIO DE ESCRITA DE CÓDIGO---------------------------------------------
//------------------------------------------Exercicio 01------------------------------------------------------
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá 
    exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime 
    uma mensagem no modelo abaixo**:**

const pessoa = {
    nome: "Amanda",
    apelido: ["Amandinha", " Mandi", " Mandinha "]
}

console.log("Eu sou " + pessoa.nome + ", mas pode me chamar de: " + pessoa.apelido + ".");


//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova
// lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const apelidos = {... pessoa, apelido: ["a", "b", "c"]};

console.log(apelidos);

2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`