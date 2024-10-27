let numberToFind = 0;
let attemps = 0;

function refresh() {
    //funcao que gera um número aleatório
    numberToFind = parseInt(Math.random() * 100);
    console.log(numberToFind)
}

function verifyNumber() {
    /*
        Essa linha pega o elemento no html que tem o id igual a bet, que no caso é um input text
        e acessa diretamente o valor que foi digitado pelo usuario dentro do input atraves do .value
        e ensere esse valor na variavel bet
    */
    let bet = document.getElementById('bet').value;

    if(bet > 100 || bet < 1) {
        alert('Aposta inválida')
        // O return dentro de um if faz com que a funcao seja interrompida neste ponto.
        return;
    }

    if(bet > numberToFind) {
        attemps = attemps + 1;
        alert('O número para ser encontrado é MENOR');
    }
    else if (bet < numberToFind) {
        attemps = attemps + 1;
        alert('O número para ser encontrado é MAIOR');
    }
    else {
        alert('Parabéns você acertou! Com '+attemps+' erros')
    }
}

refresh();