console.log("Boas vindas ao jogo de Blackjack!");
 
function iniciarJogo () {
   if (confirm("Iniciar jogo?") === true) {
      let cartaUsuario01 = comprarCarta()
      let cartaUsuario02 = comprarCarta()
      let cartaPc01 = comprarCarta()
      let cartaPc02 = comprarCarta()

   const valorTotalUsuario = cartaUsuario01.valor + cartaUsuario02.valor
   const valorTotalPc = cartaPc01.valor + cartaPc02.valor

   console.log(`Usuário - cartas: ${cartaUsuario01.texto} ${cartaUsuario02.texto} - ${valorTotalUsuario}`);
   console.log(`Computador - cartas: ${cartaPc01.texto} ${cartaPc02.texto} - ${valorTotalPc}`);

      if (valorTotalUsuario > valorTotalPc) {
         console.log('O Usuário ganhou');
      } else if (valorTotalUsuario === valorTotalPc) {
         console.log('Empate');
      } else {
         console.log('O Computador ganhou');
      }

    } else {
       console.log('Que pena ! O jogo acabou.');
    }
}

iniciarJogo()

