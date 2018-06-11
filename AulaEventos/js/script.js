function soma(num1, num2) {
    var item1 = document.getElementsByClassName("primeiro");
    var item2 = document.getElementsByClassName("segundo");
    
    //num1 = parseInt(prompt('Digite um numero: '));
    //num2 = parseInt(prompt('Digite um numero: '));
    var total = num1 + num2;
    var operacao = 'soma';
    document.writeln(operacao);
    document.write(total);
    return total;
}

function subtracao(num1, num2) {
    num1 = parseInt(prompt('Digite um numero: '));
    num2 = parseInt(prompt('Digite um numero: '));
    var total = num1 - num2;
    var operacao = 'subtracao';
    document.writeln(operacao);
    document.write(total);
    return total;
}

function multiplicacao(num1, num2) {
    num1 = parseInt(prompt('Digite um numero: '));
    num2 = parseInt(prompt('Digite um numero: '));
    var total = num1 * num2;
    var operacao = 'multiplicacao';
    document.writeln(operacao);
    document.write(total);
    return total;
}

function divisao(num1, num2) {
    num1 = parseInt(prompt('Digite um numero: '));
    num2 = parseInt(prompt('Digite um numero: '));
    var total = num1 / num2;
    var operacao = 'divisao';
    document.writeln(operacao);
    document.write(total);
    return total;
}