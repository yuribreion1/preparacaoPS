function calculaMedia(num1, num2) {
    num1 = parseInt(prompt('Digite o primeiro numero:'));
    num2 = parseInt(prompt('Digite o segundo numero'));

    var total = (num1 + num2) / 2;
    console.log('A média entre os dois numeros é: ' + total);
}

calculaMedia();

function adicionaEstado() {
    var listaCidade = [];
    var estado = prompt('Digite seu estado: ');
    listaCidade.push(estado);
    for (const cidade in listaCidade) {
        console.log(listaCidade[cidade]);
    }
}

adicionaEstado();

/**
 * function valida() {
    alert('Botão pressionado');
}
 */

