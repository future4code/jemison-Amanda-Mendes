// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a, b){
        if (a > b) return 1;
        if (a < b) return -1;
})
            return array
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
let pares = function(item) {
    return item % 2 === 0
} 
return array.filter(pares)
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let pares = function(item) {
        return item % 2 === 0
    } 
    return array.filter(pares)
    }


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
            let maior = 0
        let elemento = 0
        for (let i = 0; i < array.length ; i++){
           elemento = array[i]
           if (elemento > maior){
              maior = elemento
           }
        }
        return maior
     }


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

function maiorNumero () {
    if (num1 > num2) {
    return num1
} else return num2
}
function menorNumero () {
    if (num1 < num2) {
    return num1
} else return num2
}

let maiorDivisivelPorMenor = maiorNumero()%menorNumero() === 0

const diferenca = maiorNumero() - menorNumero()


const objeto = {
    maiorNumero: maiorNumero(),
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
}
return objeto 
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
let array = [];
   for (let i =0; array.length < n; i++) {
       if (i%2 === 0) {
           array.push(i)
       }
   }
   return array
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA===ladoB & ladoA === ladoC & ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA !== ladoB & ladoA !== ladoC & ladoB !== ladoC) {
        return "Escaleno"
    } else return "Isósceles"

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const objeto = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
   }

   return `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
const dadosPessoa = {
        pessoa
    }
    const dadosAtualizados = {...pessoa, nome: "ANÔNIMO"}
    return dadosAtualizados
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const dadosPessoas = [
       pessoas
   ]
const apenasPessoasAutorizadas = pessoas.filter((pessoa, index, array) => {
    return pessoa.altura > 1.5 & pessoa.idade > 14 & pessoa.idade < 60
}) 
return apenasPessoasAutorizadas
}
   

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const dadosPessoas = [
        pessoas
    ]
 const apenasPessoasNaoAutorizadas = pessoas.filter((pessoa, index, array) => {
     return pessoa.altura < 1.5 | pessoa.idade <= 14 | pessoa.idade > 60
 }) 
 return apenasPessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const informacoesContas = [
        contas
    ]
    let valorFinal = informacoesContas.reduce(function(item, index){
       return (item.saldoTotal - item.compras[0])
        
    })
    return valorFinal
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   const array = consultas
   
   consultas.sort(function (a, b) {
	
        return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
     
    });
return array
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const array = consultas
    const dataConsulta = consultas.map(function(item) {
        return item.dataDaConsulta
    })
    dataConsulta.sort(function (a, b) {
	    if (a > b) return 1;
        if (a < b) return -1;
    });
return array
}
