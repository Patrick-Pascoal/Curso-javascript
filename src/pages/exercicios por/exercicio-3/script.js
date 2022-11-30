//3. Escrever um algoritmo para determinar o consumo médio de um automóvel sendo fornecida a distância total percorrida pelo automóvel e o total de combustível gasto.

function averageConsumption(km, lt) {
    const kmL = km / lt
    return "KM/L =" + kmL
}

const result = averageConsumption(60, 2)

console.log(result)

