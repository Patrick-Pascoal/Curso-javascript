//23. Faça um algoritmo que receba um número e mostre uma mensagem caso este número sege maior 
//que 80, menor que 25 ou igual a 40.
function comparation(value) {
    if (value > 80) { return "Valor maior" } else if (value < 25) { return "Valor menor" } else if
        (value === 40) { return "Valor igual" }
}


const result = comparation(40)

console.log(result)

