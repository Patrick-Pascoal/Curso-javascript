//26. Faça um algoritmo que leia um número de 1 a 5 e escreva por extenso. 
//Caso o usuário digite um número que não esteja neste intervalo, exibir mensagem: número inválido.

function fullNumber(number) {
    if (number === 1) { return "um" } else if (number === 2) { return "dois" }
    else if (number === 3) { return "três" } else if (number === 4) { return "quatro" }
    else if (number === 5) { return "cinco" } else { return "numero invalido" }
}

console.log(fullNumber(14))