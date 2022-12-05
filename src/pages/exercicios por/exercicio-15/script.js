//15. Faça um algoritmo que receba um número e diga se este número está no intervalo 
//entre 100 e 200.


function valuebetween(value) {
    if (value >= 100 && value <= 200) {
        return value + " Esse Valor esta no intervalo"
    } else {
        return value + " Esse valor não esta no intervalo"
    }
}

const result = valuebetween(99)

console.log(result)