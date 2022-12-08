//24. Faça um algoritmo que receba "N" números e mostre positivo, negativo ou zero para 
//cada número.

function numbers(numbers) {
    if (numbers > 0) { return "positivo" } else if (numbers < 0) { return "negativo" } else if (numbers === 0) {
        return "zero"
    }

}

console.log(numbers(1))