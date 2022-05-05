// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
altura = prompt('Digite a altura do retangulo');
largura = prompt('Digite a largura do retangulo');
const area = altura * largura;
return area;
}


// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
anoAtual = prompt('atual');
anoNascimento = prompt('nascimento');
return anoAtual - anoNascimento;
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return  peso / (altura * altura);
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  nome = prompt('nome');
  idade = prompt('idade');
  email = prompt('email');
  const infoUsuario = ('Meu nome é '+ nome + ', tenho ' + idade + ' anos, e o meu email é ' + email + '.');
return infoUsuario
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
cor1 = prompt('primeira cor');
cor2 = prompt('segunda cor');
cor3 = prompt('terceira cor');
const coresFavoritas = [cor1, cor2, cor3];
console.log(coresFavoritas);
}

 // EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
return +custo / +valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
return array[0]
}

retornaPrimeiroElemento()

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
}

retornaUltimoElemento()

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
      let primeiroIndice = array[0]
      let ultimoIndice = array[array.length -1]
     
      ultimoIndice = array[0]
      

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}