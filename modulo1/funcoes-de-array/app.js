//-----------------------Exercícios de interpretação de código-------------------
//----------------------------------Exercício 01---------------------------------

/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

Resposta:
{nome: 'Amanda Rangel', apelido: 'Mandi'} 0
{nome: 'Laís Petra', apelido: "Laura'} 1
{nome: 'Leticia Chijo', apelido: 'Chijo'} 2


//----------------------------------Exercício 02---------------------------------

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

Resposta: (3) ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//----------------------------------Exercício 03---------------------------------

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

  Resposta: [apelido: 'Mandi', apelido: 'Laura']
*/ 

//--------------------------Exercícios de escrita de código----------------------
//----------------------------------Exercício 01---------------------------------

/*Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
realize as operações pedidas nos itens abaixo utilizando as funções de array 
map e filter:

a) Crie um novo array que contenha apenas o nome dos doguinhos

b) Crie um novo array apenas com os [cachorros salsicha]

c) Crie um novo array que possuirá mensagens para enviar para todos os 
clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de 
desconto de 10% para tosar o/a `[NOME]`!"
*/

/*
//a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

const nomePets = pets.map((item, index, array) => {
    return item.nome
 })

console.log(nomePets);

//b)
const apenasCachorrosSalsichas = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(apenasCachorrosSalsichas);

//c)
const apenasCachorrosPoodle = pets.filter((item, index, array) => {
    if (item.raca === "Poodle") {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`); 
    }
})

console.log(apenasCachorrosPoodle);
*/

//----------------------------------Exercício 02---------------------------------

/*Dado o seguinte array de produtos, realize as operações pedidas nos itens 
abaixo utilizando as funções de array map e filter:
a) Crie um novo array que contenha apenas o nome de cada item

b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
aplicando 5% de desconto em todos eles

c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra 
"Ypê"

- 💡  Dica
    
    ⭐ Para te ajudar, você pode usar o método de stirngs chamado includes() 
    que verifica se os caracteres escolhidos fazem parte da sua string
    
    E caso não se lembre como fazer isso, não tenha medo de pesquisar no google!
  
e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
*/


/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 //a)
 const nomeProdutos = produtos.map((item, index, array) => {
    return item.nome
 })

 console.log(nomeProdutos);

b)
const produtosComDesconto = produtos.map((item, index, array) => {
    const desconto = (item.preco/100)*5
    const descontoAplicado = item.preco - desconto
    return descontoAplicado.toFixed(1)
 })

console.log(produtosComDesconto);

//c)
const bebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})

console.log(bebidas);

//d)
const objetoYpe = produtos.filter((item, index, array) => {
    if (item.nome.includes("Ypê")) {
        return item.nome
    }
})

console.log(objetoYpe);

//e)
const imprimeMensagemYpe = produtos.filter((item, index, array) => {
    if (item.nome.includes("Ypê")) {
        console.log(`Compre ${item.nome} por ${item.preco}`);
    }
})
*/

//-------------------------------------DESAFIO-----------------------------------

