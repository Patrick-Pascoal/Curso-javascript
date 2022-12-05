//13. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja 
//maior que 10.

function greaterTen(value) {
    if (value > 10) {
        return "Maior que 10"
    } else {
        return "Menor que 10"
    }
}

const result = greaterTen(2)

console.log(result)